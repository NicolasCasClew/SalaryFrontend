import { Divider } from "antd";
import "./App.css";
import { ReactElement, useEffect, useState } from "react";
import { SalaryCalcSlider } from "./SalaryCalcSlider";
import { ScalaryCalcDropDown } from "./SalaryCalcSelect";
import classes from "./page.module.scss";

export function Page(): ReactElement {
  const [result, setResult] = useState(0);
  const [expCounter, setexpCounter] = useState(1);
  const [respoCounter, setrespoCounter] = useState(1);
  const [tenureCounter, settenureCounter] = useState(0);

  useEffect(() => {
    setResult(() => expCounter * respoCounter * tenureCounter);
  }, [expCounter, respoCounter, tenureCounter]);

  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      <div className={classes["left_content"]}>
        <h3 className={classes["input_title"]}>Expertise</h3>
        <h3 className={classes["input_title"]}>Responsibility</h3>
        <h3 className={classes["input_title"]}>Tenure </h3>
      </div>

      <div className={classes["left_content"]}>
        <ScalaryCalcDropDown
          setexpCounter={setexpCounter}
        ></ScalaryCalcDropDown>
        <ScalaryCalcDropDown
          setexpCounter={setrespoCounter}
        ></ScalaryCalcDropDown>
        <SalaryCalcSlider
          settenureCounter={settenureCounter}
        ></SalaryCalcSlider>
      </div>

      <Divider
        type="vertical"
        style={{
          //cant modify it through the css
          height: "440px",
          borderLeft: "1px solid gray",
          alignSelf: "center",
          display: "flex",
        }}
      />

      <div className={classes["output_divider"]}>
        <h1 style={{ paddingTop: "45px" }}>Select 1 = {expCounter}</h1>
        <h1>Select 2 = {respoCounter}</h1>
        <h1>Slider = {tenureCounter}</h1>
        <h1>result = {result}</h1>
      </div>
    </div>
  );
}
