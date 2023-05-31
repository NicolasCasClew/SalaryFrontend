import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Button, Form, Input, Radio, Tooltip } from "antd";
import type { RadioChangeEvent } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import style from "./Icon.module.scss";
import classes from "./page.module.scss";

export function UserCreator(props: {
  //setIsEmployee: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
  setSurname: Dispatch<SetStateAction<string>>;
  setMail: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}): ReactElement {
  //const [isEmployee, setIsemployee] = useState<boolean>(true);
  const [name, setName] = useState("null");
  const [surname, setSurname] = useState("null");
  const [mail, setMail] = useState("null");
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hide = () => {
    setClicked(false);
    setHovered(false);
    props.setOpen(false);
  };
  //   const radioButtonChange = (value: RadioChangeEvent) => {
  //     setIsemployee(value.target.value);
  //     props.setIsEmployee(value.target.value);
  //   };

  return (
    <Form layout="vertical" name="dynamic_form_complex">
      <Form.Item
        className={classes[""]}
        //style={{ paddingTop: "5em" }}
        label="Name"
        name="name"
      >
        <Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setName(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item className={classes[""]} label="Surname" name="surname">
        <Input
          value={surname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setSurname(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item className={classes[""]} label="Mail" name="mail">
        <Input
          value={mail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setMail(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item className={classes[""]}>
        <Button type="primary" onClick={hide}>
          Create User
        </Button>
      </Form.Item>
    </Form>
  );
}
