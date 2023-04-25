import { Dispatch, ReactElement, SetStateAction } from "react";
import { DatePicker, DatePickerProps, InputNumber, Tooltip } from "antd";

export function SalaryDatePicker(props: {
  setDateMillisCounter: Dispatch<SetStateAction<string>>;
  helpText: string;
}): ReactElement {
  const inputNumberChange = (value: DatePickerProps["onChange"]) => {
    //props.setDateMillisCounte(value);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    //console.log(date + "  y la string =" + dateString);
    props.setDateMillisCounter(date === null ? "0" : date + "");
  };
  return (
    <Tooltip title={props.helpText} placement="right">
      <DatePicker
        //style={{ width: "160px" }}
        onChange={onChange}
      />
    </Tooltip>
  );
}
