import { Col, Divider, Form, Input, Row } from "antd";
import { ReactElement } from "react";
import classes from "./page.module.scss";
import InfiniScroll from "./infiniList";
import { SalaryOutDTO } from "./salaryOut.model";
import Title from "antd/es/typography/Title";

export function DBForm(props: { salaryOutDTO: SalaryOutDTO }): ReactElement {
  console.log(props.salaryOutDTO);
  console.log("el propo");
  return (
    <Row style={{ alignItems: "center" }}>
      <Col className={classes["colTest"]}>
        <Form layout="vertical" name="dynamic_form_complex">
          <Form.Item
            className={classes["input_divider"]}
            style={{ paddingTop: "5em" }}
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input user name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className={classes["input_divider"]}
            label="Surname"
            name="surname"
            rules={[{ required: true, message: "Please input user surname!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className={classes["input_divider"]}
            label="Mail"
            name="mail"
            rules={[{ required: true, message: "Please input user mail!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Col>
      <Col>
        <Form.Item className={classes["input_divider"]}>
          <InfiniScroll />
        </Form.Item>
      </Col>
      <Col className={classes["output_divider"]}>
        <div style={{ width: "18em" }}>
          <div className={classes["text_outputs"]}>
            <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
              Expertise{" "}
            </Title>
            <Title level={5}>{props.salaryOutDTO.expertise} </Title>
          </div>
          <Divider
            type="horizontal"
            className={classes["separator_outputs"]}
            dashed
          />
          <div className={classes["text_outputs"]}>
            <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
              Responsibility
            </Title>
            <Title level={5}> {props.salaryOutDTO.responsibility} </Title>
          </div>
          <Divider
            type="horizontal"
            className={classes["separator_outputs"]}
            dashed
          />
          {/* <Divider
              type="horizontal"
              className={classes["separator_outputs"]}
              dashed
            /> */}
          <div className={classes["text_outputs"]}>
            <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
              Hours per week
            </Title>
            <Title level={5}>{props.salaryOutDTO.hoursPerWeek} </Title>
          </div>
          <Divider
            type="horizontal"
            className={classes["separator_outputs"]}
            dashed
          />
          <div className={classes["text_outputs"]}>
            <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
              Contract type
            </Title>
            <Title level={5}>
              {" "}
              {props.salaryOutDTO.isEmployee ? "Employee" : "Contractor"}{" "}
            </Title>
          </div>
          <Divider
            type="horizontal"
            className={classes["separator_outputs"]}
            dashed
          />
          <div className={classes["text_outputs"]}>
            <Title level={5} style={{ fontSize: "15px", marginTop: "1em" }}>
              Millis
            </Title>
            <Title level={5}> {props.salaryOutDTO.millis} </Title>
          </div>
          <Divider
            type="horizontal"
            className={classes["separator_outputs"]}
            dashed
          />
        </div>
      </Col>
    </Row>
  );
}
