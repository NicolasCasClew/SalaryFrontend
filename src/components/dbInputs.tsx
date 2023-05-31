import { Button, Col, Divider, Form, Input, Row } from "antd";
import { ReactElement, useState } from "react";
import classes from "./page.module.scss";
import style from "./DBContent.module.scss";
import InfiniScroll from "./infiniList";
import { SalaryOutDTO } from "./salaryOut.model";
import Title from "antd/es/typography/Title";
import { AllData } from "./allData.model";
import { useNavigate } from "react-router-dom";

export function DBForm(props: { salaryOutDTO: SalaryOutDTO }): ReactElement {
  const [selectedID, setSelectedID] = useState<string | null>("");
  const [name, setName] = useState("null");
  const [surname, setSurname] = useState("null");
  const [mail, setMail] = useState("null");
  const navigate = useNavigate();

  const deleteUser = async (id: String | null) => {
    const response = await fetch(`http://localhost:8080/users/${id}`, {
      method: "DEL",
      body: JSON.stringify(selectedID),
    });

    console.log("USER with id " + selectedID + " deleted");
  };
  const createUser = async () => {
    const tempAllData: AllData = {
      name: name,
      surname: surname,
      mail: mail,
      expertise: props.salaryOutDTO.expertise,
      responsibility: props.salaryOutDTO.responsibility,
      hoursPerWeek: props.salaryOutDTO.hoursPerWeek,
      isEmployee: props.salaryOutDTO.isEmployee,
      millis: props.salaryOutDTO.millis,
    };
    console.log("all data");
    console.log(tempAllData);

    const response = await fetch("http://localhost:8080/salary", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempAllData),
    });
    navigate("/");
    //console.log(salaryResult);
  };

  const getUser = async (id: String) => {
    const response = await fetch(`http://localhost:8080/salary/${id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(tempAllData),
    });
    navigate("/");
    //console.log(salaryResult);
  };
  const getBack = async () => {
    navigate("/");
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };
  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  function getUserById(): void {}

  return (
    <Row className={style["content"]}>
      <Col className={classes[""]}>
        <Form layout="vertical" name="dynamic_form_complex">
          <Form.Item
            className={classes[""]}
            style={{ paddingTop: "5em" }}
            label="Name"
            name="name"
          >
            <Input value={name} onChange={handleNameChange} />
          </Form.Item>
          <Form.Item className={classes[""]} label="Surname" name="surname">
            <Input value={surname} onChange={handleSurnameChange} />
          </Form.Item>

          <Form.Item className={classes[""]} label="Mail" name="mail">
            <Input value={mail} onChange={handleMailChange} />
          </Form.Item>
          <Form.Item className={classes[""]}>
            <Button type="primary" onClick={getBack}>
              Return
            </Button>
          </Form.Item>
        </Form>
      </Col>

      <Col className={classes[""]}>
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
          <div style={{ display: "flex", gap: "10px", padding: "15px" }}>
            <Button type="primary" onClick={createUser}>
              Create user
            </Button>
            <Button type="primary" onClick={() => deleteUser(selectedID)}>
              Delete user
            </Button>
          </div>
        </div>
      </Col>
      <Col>
        <Form.Item className={classes["input_divider"]}>
          <InfiniScroll setId={setSelectedID} />
        </Form.Item>
      </Col>
    </Row>
  );
}
