import { Dispatch, ReactElement, SetStateAction } from "react";
import { Select } from "antd";

export function SalaryCalcDropDown(props: {
  setExpertiseCounter: Dispatch<SetStateAction<number>>;
}): ReactElement {
  const handleselectChange = (value: number) => {
    props.setExpertiseCounter(value);
  };

  return (
    <Select
      style={{ width: 120 }}
      onChange={handleselectChange}
      defaultValue={1}
      options={[
        { value: 0, label: "0" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
      ]}
    />
  );
}
