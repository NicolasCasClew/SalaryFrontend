import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Radio, Tooltip } from "antd";
import type { RadioChangeEvent } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import style from "./Icon.module.scss";

export function SalaryRadioButon(props: {
  setIsEmployee: Dispatch<SetStateAction<boolean>>;
  helpText: string;
  id: string;
  id2: string;
}): ReactElement {
  const [isEmployee, setIsemployee] = useState<boolean>(true);
  const radioButtonChange = (value: RadioChangeEvent) => {
    setIsemployee(value.target.value);
    props.setIsEmployee(value.target.value);
  };

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
        <Radio id={props.id2} value={false}>
          Contractor
        </Radio>
      </Radio.Group>
      <Tooltip title={props.helpText} placement="right">
        <InfoCircleOutlined className={style["icon"]} />
      </Tooltip>
    </div>
  );
}
