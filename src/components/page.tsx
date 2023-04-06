import { Divider, Row, Col, Form, Button } from "antd";
import { ReactElement, useEffect, useState } from "react";
import { SalaryCalcSlider } from "./SalaryCalcSlider";
import { SalaryCalcDropDown } from "./SalaryCalcSelect";
import classes from "./page.module.scss";

export function Page(): ReactElement {
  const [result, setResult] = useState(0);
  const [expCounter, setexpCounter] = useState(1);
  const [respoCounter, setrespoCounter] = useState(1);
  const [tenureCounter, settenureCounter] = useState(0);
  //const [form] = Form.useForm();
  const [isHorizontal, setisHorizontal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  useEffect(() => {
    width < 600 && !isHorizontal && makeHorizontal();
  });
  useEffect(() => {
    width > 600 && isHorizontal && makevertical();
  });
  function makeHorizontal() {
    console.log("toggle it");
    setisHorizontal(!isHorizontal);
  }
  function makevertical() {
    console.log("toggle it");
    setisHorizontal(!isHorizontal);
  }

  useEffect(() => {
    setResult(() => expCounter * respoCounter * tenureCounter);
  }, [expCounter, respoCounter, tenureCounter]);

  return (
    <>
      <Row
        className="row"
        style={{ alignContent: "center", alignItems: "center" }}
      >
        <Col className={classes["colTest"]}>
          <Form
            //form={form}
            name="dynamic_form_complex"
            style={{ minWidth: "6em" }}
          >
            <Form.Item
              name="expertise"
              label="Expertise"
              className={classes["input_divider"]}
            >
              <SalaryCalcDropDown
                setexpCounter={setexpCounter}
              ></SalaryCalcDropDown>
            </Form.Item>
            <Form.Item
              name="responsibility"
              label="Responsibility"
              className={classes["input_divider"]}
            >
              <SalaryCalcDropDown
                setexpCounter={setrespoCounter}
              ></SalaryCalcDropDown>
            </Form.Item>
            <Form.Item
              name="tenure"
              label="Tenure"
              className={classes["input_divider"]}
            >
              <SalaryCalcSlider
                settenureCounter={settenureCounter}
              ></SalaryCalcSlider>
              <Button onClick={() => setisHorizontal(!isHorizontal)}>
                Change orientation
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col>
          <Divider
            type={isHorizontal ? "horizontal" : "vertical"}
            //className={classes["divider"]}
            style={
              isHorizontal
                ? {
                    borderTop: "1px solid rgb(0, 255, 8)",
                    width: "25em",
                    justifyContent: "center",
                  }
                : {
                    borderLeft: "1px solid rgb(0, 255, 8)",
                    height: "25em",
                    justifyContent: "center",
                  }
            }
          />
        </Col>

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
