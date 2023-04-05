import { Divider, Row, Col } from "antd";
import "./App.css";
import { ReactElement, useEffect, useState } from "react";
import { SalaryCalcSlider } from "./SalaryCalcSlider";
import { SalaryCalcDropDown } from "./SalaryCalcSelect";
import classes from "./page.module.scss";
import InfiniScroll from "./infiniList";
import SalaryCalculatorFrom from "./SalaryCalculatorForm";

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
        <Col className={classes["colTest"]}>
          <div className={classes["input_divider"]}>
            <h3 className={classes["input_title"]}>Expertise</h3>
            <SalaryCalcDropDown
              setexpCounter={setexpCounter}
            ></SalaryCalcDropDown>
          </div>
          <div className={classes["input_divider"]}>
            <h3 className={classes["input_title"]}> Responsibility</h3>
            <SalaryCalcDropDown
              setexpCounter={setrespoCounter}
            ></SalaryCalcDropDown>
          </div>
          <div className={classes["input_divider"]}>
            <h3 className={classes["input_title"]}> Tenure</h3>
            <SalaryCalcSlider
              settenureCounter={settenureCounter}
            ></SalaryCalcSlider>
          </div>
          <div className={classes["user_list"]}>
            <h3 className={classes["input_title"]}> Users</h3>
            <InfiniScroll />
          </div>
          <div className={classes["user_list"]}>
            <SalaryCalculatorFrom></SalaryCalculatorFrom>
          </div>
        </Col>

        <Divider
          type="vertical"
          style={{
            //cant modify it through the css
            height: "330px",
            borderLeft: "1px solid gray",
            alignSelf: "center",
            display: "flex",
          }}
        />

        <Col className={classes["output_divider"]}>
          <h1>Select 1 = {expCounter}</h1>
          <h1>Select 2 = {respoCounter}</h1>
          <h1>Slider = {tenureCounter}</h1>
          <h1>result = {result}</h1>
        </Col>
      </Row>
    </>
  );
}
