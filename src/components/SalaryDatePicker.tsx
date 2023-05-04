import { Dispatch, ReactElement, SetStateAction } from "react";
import { DatePicker, DatePickerProps, InputNumber, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import style from "./Icon.module.scss";
import Title from "antd/es/typography/Title";

export function SalaryDatePicker(props: {
  setDateMillisCounter: Dispatch<SetStateAction<string>>;
  helpText: string;
  years: number;
}): ReactElement {
  const inputNumberChange = (value: DatePickerProps["onChange"]) => {
    //props.setDateMillisCounte(value);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    //console.log(date + "  y la string =" + dateString);
    props.setDateMillisCounter(date === null ? "0" : date + "");
  };
  const dateformat = "DD-MMM-YY";
  const singular = props.years + " year in adabtive";
  const plural = props.years + " years in adabtive";

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <DatePicker
        //style={{ width: "160px" }}
        onChange={onChange}
        format={dateformat}
      />
      <Title
        level={5}
        style={{
          fontSize: "15px",
          marginTop: "0.5em",
          opacity: "50%",
          paddingLeft: "2em ",
        }}
      >
        {props.years === 1 ? singular : plural}
      </Title>
      <Tooltip title={props.helpText} placement="right">
        <InfoCircleOutlined className={style["icon"]} />
      </Tooltip>
    </div>
  );
}
