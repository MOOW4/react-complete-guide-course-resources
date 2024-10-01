import {useCallback, useEffect, useState} from "react";

async function sendHttpRequest(url, config){

  const response = await fetch(url, config);

  const data = await response.json();

  if (!response.ok){
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}


export default function useHttp(url, config, initialData) {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialData);

  const clearData = () => {
    setData(initialData);
  }

  const sendRequest  = useCallback( async function sendRequest(data){
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, {...config, body: data});
      setData(resData);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    if(config && (config.method === 'GET' || !config.method) || !config){
      sendRequest();
    };
  }, [sendRequest, config]);

  return {
    isLoading,
    error,
    data,
    sendRequest,
    clearData
  };

}