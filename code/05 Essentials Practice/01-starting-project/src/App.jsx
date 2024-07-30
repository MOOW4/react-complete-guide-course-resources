import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";

function checkDuration(duration) {
    return duration >= 1;
}

function App() {

    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 1000,
        annualInvestment: 100,
        expectedReturn: 6,
        duration: 10,
    });

    function handleInput(inputIdentifier, newValue) {
        setInvestmentData((prevInvestmentData) => {
            return {
                ...prevInvestmentData,
                [inputIdentifier]: +newValue,
            };
        });
    }



    return (
        <>
            <Header/>
            <Input handleInput={handleInput} investmentData={investmentData}/>
            {!checkDuration(investmentData.duration) && <p className="center">Please enter a duration greater than zero.</p>}
            {checkDuration(investmentData.duration) && <Results investmentData={investmentData}/>}
        </>
    )
}

export default App
