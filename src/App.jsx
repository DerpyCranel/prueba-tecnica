import React, { useState } from "react";
import Form from "./assets/components/Form";
import Result from "./assets/components/Result";
import Calculate from "./assets/components/Calculate";

function App() {
  const [n, setN] = useState(null);
  const [result,setResult]= useState(null);

  const handleCalculate = (value) => {
    setN(value);
  };

  const handleResult = (value) => {
    setResult(value);
  }


  return (

 
    <>
      <div className="container">
      <h1>Calcular serie</h1>
      <Form onCalculate={handleCalculate}></Form>
      {n !== null && <Calculate n={n} onResult={handleResult} />}
      {result !== null && <Result result={result} />}
      </div>
    </>
  );
}

export default App;
