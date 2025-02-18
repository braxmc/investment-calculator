import Header from "./componenets/Header.jsx"
import UserInput from "./componenets/UserInput.jsx";
import Result from "./componenets/Results.jsx";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5,
    duration: 12
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput} />
      <Result userInput={userInput} />
    </>
  );
}

export default App;
