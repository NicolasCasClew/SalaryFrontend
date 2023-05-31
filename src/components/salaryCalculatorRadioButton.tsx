import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Radio, Tooltip } from "antd";
import type { RadioChangeEvent } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import style from "./Icon.module.scss";

export function SalaryRadioButon(props: {
  setIsEmployee: Dispatch<SetStateAction<boolean>>;
  helpText: string;
  id: string;
  currentValue: boolean;
}): ReactElement {
  const [isEmployee, setIsemployee] = useState<boolean>(props.currentValue);
  const radioButtonChange = (value: RadioChangeEvent) => {
    setIsemployee(value.target.value);
    props.setIsEmployee(value.target.value);
  };
  useEffect(() => {
    setIsemployee(props.currentValue);
  }, [props.currentValue]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Radio.Group
        onChange={radioButtonChange}
        value={isEmployee}
        buttonStyle="solid"
        optionType="button"
      >
        <Radio id={props.id} value={true}>
          Employee
        </Radio>
        <Radio value={false}>Contractor</Radio>
      </Radio.Group>
      <Tooltip title={props.helpText} placement="right">
        <InfoCircleOutlined className={style["icon"]} />
      </Tooltip>
    </div>
  );
}
