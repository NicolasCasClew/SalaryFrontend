import { Divider, Row, Col } from "antd";
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
    <>
      <Row className="row">
        <Col className="colTest">
          <div className={classes["input_divider"]}>
            <h3 className={classes["input_title"]}>Expertise</h3>
            <ScalaryCalcDropDown
              setexpCounter={setexpCounter}
            ></ScalaryCalcDropDown>
          </div>
          <div className={classes["input_divider"]}>
            <h3 className={classes["input_title"]}>Responsibility</h3>
            <ScalaryCalcDropDown
              setexpCounter={setrespoCounter}
            ></ScalaryCalcDropDown>
          </div>
          <div className={classes["input_divider"]}>
            <h3 className={classes["input_title"]}>Tenure </h3>
            <SalaryCalcSlider
              settenureCounter={settenureCounter}
            ></SalaryCalcSlider>
          </div>
        </Col>

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

        <Col className={classes["output_divider"]}>
          <h1 style={{ paddingTop: "45px" }}>Select 1 = {expCounter}</h1>
          <h1>Select 2 = {respoCounter}</h1>
          <h1>Slider = {tenureCounter}</h1>
          <h1>result = {result}</h1>
        </Col>
      </Row>
    </>
  );
}
