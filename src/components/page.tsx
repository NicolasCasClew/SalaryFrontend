import { Divider, Row, Col, Form, Typography } from "antd";
import { ReactElement, useEffect, useState } from "react";
import { SalaryCalcSlider } from "./SalaryCalcSlider";
import { SalaryRadioButon } from "./salaryCalculatorRadioButton";
import classes from "./page.module.scss";
import { SalaryDatePicker } from "./SalaryDatePicker";
import { SalaryDTO } from "./salary.model";
import { SalaryOutDTO } from "./salaryOut.model";

export function Page(): ReactElement {
  const { Title } = Typography;
  const [result, setResult] = useState<number>(0);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [expertiseCounter, setExpertiseCounter] = useState(0);
  const [expertiseResult, setExpertiseResult] = useState(0);
  const [loyaltyResult, setLoyaltyResult] = useState(0);
  const [responsibilityResult, setResponsibilityResult] = useState(0);
  const [responsibilityCounter, setResponsibiltyCounter] = useState(1);
  const [tenureCounter, setTenureCounter] = useState<number>(0);
  const [FTECounter, setFTECounter] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isEmployee, setIsEmployee] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [dateMillis, setDateMillis] = useState("");
  const loremIpsum =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

  const sendData = async () => {
    var n = Number(dateMillis);
    // const numbers: number[] = [
    //   expertiseCounter,
    //   responsibilityCounter,
    //   tenureCounter,
    //   hoursPerWeek,
    //   isEmployee ? 1 : 0,
    //   n,
    // ];
    const salaryOut: SalaryOutDTO = {
      expertise: expertiseCounter,
      responsibility: responsibilityCounter,
      hoursPerWeek: hoursPerWeek,
      isEmployee: isEmployee,
      millis: n,
    };
    //console.log(isEmployee);
    //console.log(salaryOut);
    // console.log("Stringyfied= " + JSON.stringify(salaryOut));
    const response = await fetch("http://localhost:8080/processNumbers", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(salaryOut),
    });

    const salaryResult: SalaryDTO = await response.json();
    const { salaryFTE, salaryTotal, tenure } = salaryResult;
    setFTECounter(salaryFTE);
    setResult(salaryTotal);
    setTenureCounter(tenure);

    //console.log(salaryResult);
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
    }, 90);
    return () => clearTimeout(getData);
  }, [
    expertiseCounter,
    responsibilityCounter,
    hoursPerWeek,
    isEmployee,
    dateMillis,
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
          <Form layout="vertical" name="dynamic_form_complex">
            <Form.Item
              className={classes["input_divider"]}
              label="Type of contract"
              style={{ paddingTop: "5em" }}
            >
              <SalaryRadioButon
                id="radioButton"
                setIsEmployee={setIsEmployee}
                helpText={loremIpsum}
              />
            </Form.Item>
            <Form.Item
              className={classes["input_divider"]}
              label="Started with the company"
            >
              <SalaryDatePicker
                helpText={loremIpsum}
                years={tenureCounter}
                setDateMillisCounter={setDateMillis}
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
                helpText={loremIpsum}
                setCounter={setHoursPerWeek}
                marks={{
                  0: "0",
                  8: "8",
                  16: "16",
                  24: "24",
                  32: "32",
                  40: "40",
                }}
                default={40}
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
                step={0.25}
                helpText={loremIpsum}
                marks={{ 0: "0", 1: "1", 2: "2", 3: "3", 4: "4" }}
                default={0}
              ></SalaryCalcSlider>
            </Form.Item>
            <Form.Item
              name="responsibility"
              label="Responsibility"
              className={classes["input_divider"]}
              style={{ paddingBottom: "2em" }}
            >
              <SalaryCalcSlider
                setCounter={setResponsibiltyCounter}
                minNumber={1}
                maxNumber={4}
                step={0.25}
                helpText={loremIpsum}
                marks={{ 1: "1", 2: "2", 3: "3", 4: "4" }}
                default={1}
              ></SalaryCalcSlider>
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
                Hours per week{" "}
              </Title>
              <Title level={5}>{hoursPerWeek} </Title>
            </div>
            <Divider
              type="horizontal"
              className={classes["separator_outputs"]}
              dashed
            />
            <Divider
              type="horizontal"
              className={classes["separator_outputs"]}
              dashed
            />
            <div className={classes["text_outputs"]}>
              <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
                FTE Salary
              </Title>
              <Title level={5}>€ {FTECounter.toLocaleString("de-DE")} </Title>
            </div>
            <Divider
              type="horizontal"
              className={classes["separator_outputs"]}
              dashed
            />
          </div>
          <div className={classes["total_output"]}>
            <Title level={3}>Salary </Title>
            <Title level={3}>€ {result.toLocaleString("de-DE")} </Title>
          </div>
          <Divider
            type="horizontal"
            style={{ borderColor: "#10320a", margin: "0" }}
          />
        </Col>
      </Row>
    </>
  );
}
