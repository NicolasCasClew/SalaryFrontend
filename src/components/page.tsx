import { Divider, Row, Col, Form, Typography } from "antd";
import { ReactElement, useEffect, useState } from "react";
import { SalaryCalcSlider } from "./SalaryCalcSlider";
import { SalaryCalcDropDown } from "./SalaryCalcSelect";
import classes from "./page.module.scss";

export function Page(): ReactElement {
  const { Title } = Typography;
  const [result, setResult] = useState(0);
  const [expertiseCounter, setExpertiseCounter] = useState(1);
  const [responsibilityCounter, setResponsibiltyCounter] = useState(1);
  const [tenureCounter, setTenureCounter] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

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
    setResult(() => expertiseCounter * responsibilityCounter * tenureCounter);
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
          <Title level={4}>select 1 = {expertiseCounter}</Title>
          <Title level={4}>select 2 = {responsibilityCounter}</Title>
          <Title level={4}>slider = {tenureCounter}</Title>
          <Title level={4}>result = {result}</Title>
        </Col>
      </Row>
    </>
  );
}
