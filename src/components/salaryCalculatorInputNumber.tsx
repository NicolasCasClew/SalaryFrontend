import { Dispatch, ReactElement, SetStateAction } from "react";
import { InputNumber, Tooltip } from "antd";

export function SalaryInputNumber(props: {
  setTenureCounter: Dispatch<SetStateAction<number | null>>;
  helpText: string;
}): ReactElement {
  const inputNumberChange = (value: number | null) => {
    props.setTenureCounter(value === null ? 1 : value);
  };
  //IF THE NUMBER IS REMOVED IT EXPLODES , FIX TODO
  return (
    <Tooltip title={props.helpText} placement="right">
      <InputNumber
        min={1}
        max={15}
        defaultValue={1}
        //style={{ width: "160px" }}
        onChange={inputNumberChange}
      />
    </Tooltip>
  );
}
