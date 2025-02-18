import Header from "./componenets/Header.jsx"
import UserInput from "./componenets/UserInput.jsx";
import Results from "./componenets/Results.jsx";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5,
    duration: 12
  });

  const inputIsValid = userInput.duration >= 1;

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
      {inputIsValid ? <Results userInput={userInput} /> : <p className="center">Please enter a duration greater than 0.</p>}
    </>
  );
}

export default App;
