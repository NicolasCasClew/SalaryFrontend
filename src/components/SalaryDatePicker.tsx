import { Dispatch, ReactElement, SetStateAction } from "react";
import { DatePicker, DatePickerProps, InputNumber, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import style from "./Icon.module.scss";

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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <DatePicker
        //style={{ width: "160px" }}
        onChange={onChange}
      />
      <Tooltip title={props.helpText} placement="right">
        <InfoCircleOutlined className={style["icon"]} />
      </Tooltip>
    </div>
  );
}
