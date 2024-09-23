import React, { useState, useEffect } from "react";
import "./PasswordGen.css";

const PasswordGen = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(15);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [errors, setErrors] = useState("");

  const generatePassword = () => {
    setErrors("");

    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("You must select at least one character type");
    }
    if (passwordLength <= 0) {
      return setErrors("Password length cannot be 0 or negative");
    }
    if (passwordLength > 30) {
      setPassword("");
      return setErrors("Password length cannot exceed 30 characters");
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3);
      if (lowercase && choice === 0) {
        password += randomLower();
      } else if (uppercase && choice === 1) {
        password += randomUpper();
      } else if (symbols && choice === 2) {
        password += randomSymbol();
      } else if (numbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
  };

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="app">
      <span>Password Generator</span>
      <div className="password">
        <div>{password}</div>
        <button
          className="copy"
          onClick={() => navigator.clipboard.writeText(password)}
        >
          Copy
        </button>
      </div>
      <div className="container">
        <div className="subContainer">
          <div className="option">
            <label>Password Length</label>
            <input
              type="number"
              name="length"
              min="4"
              max="50"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>

          <div className="option">
            <label> Uppercase </label>
            <input
              type="checkbox"
              name="uppercase"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
          </div>

          <div className="option">
            <label>Lowercase</label>
            <input
              type="checkbox"
              name="lowercase"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
          </div>

          <div className="option">
            <label>Numbers</label>
            <input
              type="checkbox"
              name="numbers"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
          </div>

          <div className="option">
            <label>Special Characters</label>
            <input
              type="checkbox"
              name="symbols"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
          </div>

          {errors && <div className="error">{errors}</div>}

          <div className="button">
            <input
              type="submit"
              name="generate"
              value="Generate"
              onClick={generatePassword}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGen;
