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
    //console.log(response);
    setResult(salaryResult[0]);
    setExpertiseResult(salaryResult[1]);
    setLoyaltyResult(salaryResult[2]);
    setResponsibilityResult(salaryResult[3]);
    //setExpertiseCounter(salaryResult(2));
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsHorizontal(width <= 602);
  }, [width]);

  useEffect(() => {
    console.log("Si, se han tocado los jimmys");
    sendData();
  }, [expertiseCounter, responsibilityCounter, tenureCounter]);

  return (
    <>
      <Row
        className="row"
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
            <Form.Item>
              <InfiniScroll />
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
          <Title level={4}>Result= {result} €</Title>
          <Title level={4}>Loyalty Bonus= {loyaltyResult} €</Title>
          <Title level={4}>Expertise Bonus = {expertiseResult} €</Title>
          <Title level={4}>
            Responsability Bonus = {responsibilityResult} €
          </Title>
        </Col>
      </Row>
    </>
  );
}
