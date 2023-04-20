import { Dispatch, ReactElement, SetStateAction } from "react";
import { InputNumber } from "antd";

export function SalaryInputNumber(props: {
  setTenureCounter: Dispatch<SetStateAction<number | null>>;
}): ReactElement {
  const inputNumberChange = (value: number | null) => {
    props.setTenureCounter(value);
  };

  return (
    <InputNumber
      min={1}
      max={1000}
      //keyboard={false}
      defaultValue={1}
      //style={{ width: "160px" }}
      onChange={inputNumberChange}
    />
  );
}
