import React, { useState } from "react";

import "../styles/hra.css";
const Hra = () => {
  const [basicSalary, setBasicSalary] = useState(null);
  const [da, setDa] = useState(null);
  const [commission, setCommission] = useState(null);
  const [hraReceived, setHraReceived] = useState(null);
  const [rentPaid, setRentPaid] = useState(null);
  const [metroCity, setMetroCity] = useState(false);
  const [exemptedHRA, setExemptedHRA] = useState(null);
  const [taxableHRA, setTaxableHRA] = useState(null);
  const [data, setData] = useState([]);

  const handleCalculate = () => {
    const totalSalary = basicSalary + commission + da;
    setTaxableHRA(totalSalary);
    setExemptedHRA(totalSalary);
  };

  const handleResetButton = () => {
    setBasicSalary(null);
    setHraReceived(null);
    setRentPaid(null);
    setCommission(null);
    setDa(null);
    setTaxableHRA(null);
    setExemptedHRA(null);
    setMetroCity(null);
    setData([]);
  };

  const handleInputClick = (inputName) => {
    if (!data.includes(inputName)) {
      setData((prevData) => [prevData, inputName]);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="calci-heading">HOUSE RENT ALLOWANCE</h1>
        <form>
          <div className="grey-col content">
            <label>Basic Salary</label>
            <input
              type="text"
              maxLength={10}
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              onClick={() => handleInputClick("basicSalary")}
            />
          </div>
          <div className="content">
            <label>DA forming part of salary</label>
            <input
              type="text"
              maxLength={10}
              value={da}
              onChange={(e) => setDa(e.target.value)}
              onClick={() => handleInputClick("da")}
            />
          </div>
          <div className="grey-col content">
            <label>
              Commission (as % of turnover achieved by the employee)
            </label>
            <input
              type="text"
              maxLength={10}
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
              onClick={() => handleInputClick("commission")}
            />
          </div>

          <div className="content">
            <label>HRA Received</label>
            <input
              type="text"
              maxLength={10}
              value={hraReceived}
              onChange={(e) => setHraReceived(e.target.value)}
              onClick={() => handleInputClick("hraReceived")}
            />
          </div>

          <div className="grey-col content">
            <label>Rent Paid</label>
            <input
              type="text"
              maxLength={10}
              value={rentPaid}
              onChange={(e) => setRentPaid(e.target.value)}
              onClick={() => handleInputClick("rentPaid")}
            />
          </div>
          <div className="content">
            <label>Tick if residing in metro city</label>
            <div>
              <input
                type="checkbox"
                onChange={(e) => setMetroCity(e.target.value)}
              />
              <span className="checkbox-head">(Tick if Yes)</span>
            </div>
          </div>
          <div className="grey-col content">
            <label>Exempted House Rent Allowance</label>
            <input
              type="number"
              value={exemptedHRA}
              disabled
            />
          </div>
          <div className="content">
            <label>Taxable House Rent Allowance</label>
            <input
              type="number"
              value={taxableHRA}
              disabled
            />
          </div>
        </form>

        <div className="buttons-div">
          <button className="calcualte-btn" onClick={handleCalculate}>
            Calculate
          </button>
          <button className="reset-btn" onClick={handleResetButton}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Hra;
