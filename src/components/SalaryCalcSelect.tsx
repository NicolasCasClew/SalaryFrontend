import { Dispatch, ReactElement, SetStateAction } from "react";
import { Select, SelectProps, Tooltip } from "antd";

export function SalaryCalcDropDown(props: {
  setExpertiseCounter: Dispatch<SetStateAction<number>>;
  itemNumberBegin: number;
  itemNumberEnd: number;
  helpText: string;
}): ReactElement {
  const allOptions: SelectProps["options"] = [];

  const handleSelectChange = (value: number) => {
    props.setExpertiseCounter(value);
  };

  for (let i = props.itemNumberBegin; i <= props.itemNumberEnd; i++) {
    allOptions.push({
      label: i,
      value: i,
    });
  }

  return (
    <Tooltip title={props.helpText} placement="right">
      <Select
        style={{ width: 120 }}
        onChange={handleSelectChange}
        defaultValue={1}
        options={allOptions}
      />
    </Tooltip>
  );
}
