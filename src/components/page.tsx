import { Divider, Row, Col, Form, Typography } from "antd";
import { ReactElement, useEffect, useState } from "react";
import { SalaryCalcSlider } from "./SalaryCalcSlider";
import { SalaryCalcDropDown } from "./SalaryCalcSelect";
import classes from "./page.module.scss";
import InfiniScroll from "./infiniList";
import { Button } from "antd/es/radio";

export function Page(): ReactElement {
  const { Title } = Typography;
  const [result, setResult] = useState<number>(0);
  const [expertiseCounter, setExpertiseCounter] = useState(1);
  const [expertiseResult, setExpertiseResult] = useState(0);
  const [loyaltyResult, setLoyaltyResult] = useState(0);
  const [responsibilityResult, setResponsibilityResult] = useState(0);
  const [responsibilityCounter, setResponsibiltyCounter] = useState(1);
  const [tenureCounter, setTenureCounter] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const sendData = async () => {
    const numbers = [expertiseCounter, responsibilityCounter, tenureCounter];
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
    setIsHorizontal(width <= 761);
  }, [width]);

  useEffect(() => {
    sendData();
  }, [expertiseCounter, responsibilityCounter, tenureCounter]);

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
            name="dynamic_form_complex"
            style={{ minWidth: "6em", alignItems: "center" }}
          >
            <Form.Item
              name="expertise"
              label="Expertise"
              className={classes["input_divider"]}
            >
              <SalaryCalcDropDown
                setExpertiseCounter={setExpertiseCounter}
              ></SalaryCalcDropDown>
            </Form.Item>
            <Form.Item
              name="responsibility"
              label="Responsibility"
              className={classes["input_divider"]}
            >
              <SalaryCalcDropDown
                setExpertiseCounter={setResponsibiltyCounter}
              ></SalaryCalcDropDown>
            </Form.Item>
            <Form.Item
              name="tenure"
              label="Tenure"
              className={classes["input_divider"]}
            >
              <SalaryCalcSlider
                setTenureCounter={setTenureCounter}
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
          <div className={classes["text_outputs"]}>
            <Title level={5}>Result= </Title>
            <Title level={5}>{result} €</Title>
          </div>
          <div className={classes["text_outputs"]}>
            <Title level={5}>Loyalty Bonus= </Title>
            <Title level={5}> {loyaltyResult} €</Title>
          </div>
          <div className={classes["text_outputs"]}>
            <Title level={5}>Expertise Bonus = </Title>
            <Title level={5}> {expertiseResult} €</Title>
          </div>
          <div className={classes["text_outputs"]}>
            <Title level={5}>Responsability Bonus =</Title>
            <Title level={5}>{responsibilityResult} €</Title>
          </div>
        </Col>
      </Row>
    </>
  );
}
