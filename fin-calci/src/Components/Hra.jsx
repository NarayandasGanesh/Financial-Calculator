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
    const actualHraReceived = Math.min(
      hraReceived,
      rentPaid,
      totalSalary * (metroCity ? 0.4 : 0.6)
    );
    const rentExceeds10Percent = rentPaid > totalSalary * 0.1;
    const hraExempt = actualHraReceived - (rentPaid - totalSalary * 0.1);
    const taxableHRA = rentExceeds10Percent ? hraExempt : actualHraReceived;
    const exemptedHRA = actualHraReceived - taxableHRA;

    setTaxableHRA(taxableHRA);
    setExemptedHRA(exemptedHRA);
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
      setData((prevData) => [...prevData, inputName]);
    }
  };

  // console.log(metroCity);
  return (
    <>
      <div className="container">
        <h1 className="calci-heading">HOUSE RENT ALLOWANCE</h1>
        <form>
          <div className="grey-row content">
            <label>Basic Salary</label>
            <input
              type="text"
              maxLength={10}
              value={basicSalary}
              onChange={(e) => setBasicSalary(parseInt(e.target.value))}
              onClick={() => handleInputClick("basicSalary")}
            />
          </div>
          <div className="content">
            <label>DA forming part of salary</label>
            <input
              type="text"
              maxLength={10}
              value={da}
              onChange={(e) => setDa(parseInt(e.target.value))}
              onClick={() => handleInputClick("da")}
            />
          </div>
          <div className="grey-row content">
            <label>
              Commission (as % of turnover achieved by the employee)
            </label>
            <input
              type="text"
              maxLength={10}
              value={commission}
              onChange={(e) => setCommission(parseInt(e.target.value))}
              onClick={() => handleInputClick("commission")}
            />
          </div>

          <div className="content">
            <label>HRA Received</label>
            <input
              type="text"
              maxLength={10}
              value={hraReceived}
              onChange={(e) => setHraReceived(parseInt(e.target.value))}
              onClick={() => handleInputClick("hraReceived")}
            />
          </div>

          <div className="grey-row content">
            <label>Rent Paid</label>
            <input
              type="text"
              maxLength={10}
              value={rentPaid}
              onChange={(e) => setRentPaid(parseInt(e.target.value))}
              onClick={() => handleInputClick("rentPaid")}
            />
          </div>
          <div className="content">
            <label>Tick if residing in metro city</label>
            <div>
              <input
                type="checkbox"
                onChange={(e) => setMetroCity(e.target.checked)}
              />
              <span className="checkbox-head">(Tick if Yes)</span>
            </div>
          </div>
          <div className="grey-row content">
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
