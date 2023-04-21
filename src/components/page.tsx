import { Divider, Row, Col, Form, Typography, Tooltip } from "antd";
import { ReactElement, SetStateAction, useEffect, useState } from "react";
import { SalaryCalcSlider } from "./SalaryCalcSlider";
import { SalaryCalcDropDown } from "./SalaryCalcSelect";
import { SalaryRadioButon } from "./salaryCalculatorRadioButton";
import { SalaryInputNumber } from "../assets/salaryCalculatorInputNumber";
import classes from "./page.module.scss";
import InfiniScroll from "./infiniList";
import { Button } from "antd/es/radio";

export function Page(): ReactElement {
  const { Title } = Typography;
  const [result, setResult] = useState<number>(0);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [expertiseCounter, setExpertiseCounter] = useState(1);
  const [expertiseResult, setExpertiseResult] = useState(0);
  const [loyaltyResult, setLoyaltyResult] = useState(0);
  const [responsibilityResult, setResponsibilityResult] = useState(0);
  const [responsibilityCounter, setResponsibiltyCounter] = useState(1);
  const [tenureCounter, setTenureCounter] = useState<number | null>(0);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isEmployee, setIsEmployee] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const sendData = async () => {
    const numbers = [
      expertiseCounter,
      responsibilityCounter,
      tenureCounter,
      hoursPerWeek,
      isEmployee ? 1 : 0,
    ];
    const response = await fetch("http://localhost:8080/processNumbers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbers),
    });
    const salaryResult = await response.json();
    console.log(salaryResult); // 1=SalaryTotal   2=SeniorityPlus   3= loyaltyPlus   4=responsibilityPlus
    setResult(salaryResult[0]);
    setExpertiseResult(salaryResult[1]);
    setLoyaltyResult(salaryResult[2]);
    setResponsibilityResult(salaryResult[3]);
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsHorizontal(width <= 920);
  }, [width]);

  useEffect(() => {
    const getData = setTimeout(() => {
      sendData();
    }, 250);
    return () => clearTimeout(getData);
  }, [
    expertiseCounter,
    responsibilityCounter,
    tenureCounter,
    hoursPerWeek,
    isEmployee,
  ]);

  return (
    <>
      <Row
        className={classes["colTest"]}
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Col className={classes["colTest"]}>
          <Form
            layout="vertical"
            name="dynamic_form_complex"
            style={{ minWidth: "6em", alignItems: "center" }}
          >
            <Form.Item className={classes["input_divider"]}>
              <SalaryRadioButon
                setIsEmployee={setIsEmployee}
                helpText="Lorem ipsumt etc etc"
              />
            </Form.Item>
            <Form.Item
              className={classes["input_divider"]}
              name="hous per week"
              label="Hours Per Week"
            >
              <SalaryCalcSlider
                maxNumber={40}
                minNumber={0}
                step={1}
                helpText="Lorem ipsum mucho texto "
                setCounter={setHoursPerWeek}
              />
            </Form.Item>
            <Form.Item
              name="expertise"
              label="Expertise"
              className={classes["input_divider"]}
            >
              <SalaryCalcSlider
                setCounter={setExpertiseCounter}
                minNumber={0}
                maxNumber={4}
                step={1}
                helpText="Lorem ipsum text text"
              ></SalaryCalcSlider>
            </Form.Item>
            <Form.Item
              name="responsibility"
              label="Responsibility"
              className={classes["input_divider"]}
            >
              <SalaryCalcSlider
                setCounter={setResponsibiltyCounter}
                minNumber={1}
                maxNumber={4}
                step={0.25}
                helpText="Lorem Ipsum the other one"
              ></SalaryCalcSlider>
            </Form.Item>
            <Form.Item
              name="tenure"
              label="Tenure"
              className={classes["input_divider"]}
            >
              <SalaryInputNumber
                setTenureCounter={setTenureCounter}
                helpText="Lorem ipipipipipipipipipipipipipipippi"
              />
            </Form.Item>
          </Form>
        </Col>
        <Col>
          <Divider
            type={isHorizontal ? "horizontal" : "vertical"}
            className={
              isHorizontal ? classes["divider_H"] : classes["divider_V"]
            }
          />
        </Col>

        <Col className={classes["output_divider"]}>
          <div style={{ width: "18em" }}>
            <div className={classes["text_outputs"]}>
              <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
                Classification
              </Title>
              <Title level={5}>{isEmployee ? "Employee" : "Contractor"}</Title>
            </div>
            <Divider
              type="horizontal"
              className={classes["separator_outputs"]}
              dashed
            />
            <div
              className={classes["text_outputs"]}
              //style={{ paddingRight: "75px" }}
            >
              <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
                Hours per week{" "}
              </Title>
              <Title level={5}>{hoursPerWeek} </Title>
            </div>
            <Divider
              type="horizontal"
              className={classes["separator_outputs"]}
              dashed
            />
            <div className={classes["text_outputs"]}>
              <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
                Year in the company(?)
              </Title>
              <Title level={5}>{tenureCounter} </Title>
            </div>
            <Divider
              type="horizontal"
              className={classes["separator_outputs"]}
              dashed
            />
          </div>
          <div className={classes["total_output"]}>
            <Title level={3}>FTE Salary </Title>
            <Title level={3}>{result.toLocaleString("de-DE")} €</Title>
          </div>

          <Divider
            type="horizontal"
            style={{ borderColor: "#10320a", margin: "0" }}
            //dashed or no dashed???
          />
        </Col>
      </Row>
    </>
  );
}
