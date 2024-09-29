import {createContext, useState} from "react";


const UserProgressContext = createContext({
  progress: '', // 'cart', 'checkout''
  showCart: () => {},
  showCheckout: () => {},
  hideCart: () => {},
  hideCheckout: () => {},
});


export function UserProgressContextProvider({children}) {

  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }
  function showCheckout() {
    setUserProgress('checkout');
  }
  function hideCart() {
    setUserProgress('');
  }
  function hideCheckout() {
    setUserProgress('');
  }

  const userProgressCntxt = {
    progress: userProgress,
    showCart,
    showCheckout,
    hideCart,
    hideCheckout,
  };

  return(
    <UserProgressContext.Provider value={userProgressCntxt}>
      {children}
    </UserProgressContext.Provider>
  );

}

export default UserProgressContext;