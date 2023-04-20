import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Radio, Tooltip } from "antd";
import type { RadioChangeEvent } from "antd";

export function SalaryRadioButon(props: {
  setIsEmployee: Dispatch<SetStateAction<boolean>>;
  helpText: string;
}): ReactElement {
  const [isEmployee, setIsemployee] = useState<boolean>(true);
  const radioButtonChange = (value: RadioChangeEvent) => {
    setIsemployee(value.target.value);
    console.log("el empleado es =" + isEmployee);
    props.setIsEmployee(value.target.value);
  };

  return (
    <Tooltip title={props.helpText} placement="right">
      <Radio.Group
        onChange={radioButtonChange}
        value={isEmployee}
        buttonStyle="solid"
        optionType="button"
      >
        <Radio value={true}>Employee</Radio>
        <Radio value={false}>Contractor</Radio>
      </Radio.Group>
    </Tooltip>
  );
}
