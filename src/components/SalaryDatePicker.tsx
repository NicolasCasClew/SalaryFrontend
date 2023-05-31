import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DatePicker, DatePickerProps, InputNumber, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import style from "./Icon.module.scss";
import Title from "antd/es/typography/Title";
import dayjs, { Dayjs } from "dayjs";

export function SalaryDatePicker(props: {
  setDateMillisCounter: Dispatch<SetStateAction<number>>;
  helpText: string;
  years: number;
  currentTime: number;
}): ReactElement {
  const [dateValue, setDateValue] = useState(0);
  const inputNumberChange = (value: DatePickerProps["onChange"]) => {
    //props.setDateMillisCounte(value);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    const tempDate = date === null ? "0" : date + "";
    const tempNum: number = +tempDate;
    props.setDateMillisCounter(tempNum);
  };
  const dateformat = "DD-MMM-YY";
  const singular = props.years + " year in adabtive";
  const plural = props.years + " years in adabtive";
  useEffect(() => {
    setDateValue(props.currentTime);
  }, [props.currentTime, props.setDateMillisCounter]);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <DatePicker
        //style={{ width: "160px" }}
        onChange={onChange}
        format={dateformat}
        value={dateValue === 0 ? undefined : dayjs(dateValue)}
        //props.currentTime === 0 ? null: dayjs(props.currentTime)
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
