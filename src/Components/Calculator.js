import React, { useState } from "react";
import { FaPlus } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaDivide } from 'react-icons/fa';
import { MdRemove } from 'react-icons/md';

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucMessage, setSucMessage] = useState("!");

  const validateInput = () => {
    if (num1.trim() === "" || num2.trim() === "") {
      setErrorMessage("Please enter both numbers.");
      return false;
    }

    if (!/^-?\d*\.?\d*$/.test(num1) || !/^-?\d*\.?\d*$/.test(num2)) {
      setErrorMessage("Please enter valid numbers.");
      return false;
    }

    setErrorMessage("");
    setSucMessage("Success!");
    return true;
  };

  const handleOperation = (operator) => {
    if (validateInput()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operator) {
        case "+":
          setResult(`Result: ${number1 + number2}`);
          break;
        case "-":
          setResult(`Result: ${number1 - number2}`);
          break;
        case "*":
          setResult(`Result: ${number1 * number2}`);
          break;
        case "/":
          if (number2 === 0) {
            setErrorMessage("Cannot divide by zero.");
          } else {
            setResult(`Result: ${number1 / number2}`);
          }
          break;
        default:
          setResult("");
      }
    }
  };

  return (
    <div id="dib1">
      <div className="in">
        <label>
          <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)}placeholder="Num1"
          style={{width: "100%"}} id="in1"/>
        </label>
      </div>
      <div className="in">
        <label>
          <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Num 2"
          style={{width: "100%"}} id="in2" />
        </label>
      </div>
      <div style={{display: "flex", justifyContent: "space-between" ,height: "35px"}}>
        <button onClick={() => handleOperation("+")} style={{width: "20%"}}><FaPlus /></button>
        <button onClick={() => handleOperation("-")}style={{width: "20%"}}><MdRemove /></button>
        <button onClick={() => handleOperation("*")}style={{width: "20%"}}><FaTimes /></button>
        <button onClick={() => handleOperation("/")}style={{width: "20%"}}><FaDivide /></button>
      </div>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      {result &&<div style={{color:"blue"}}>{sucMessage}</div> && <div style={{ color: "black",
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0em",
      textAlign: "center",
 }}>{result}</div>}
    </div>
  );
};

export default Calculator;
