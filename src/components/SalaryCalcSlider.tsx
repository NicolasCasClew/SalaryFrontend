import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { Slider, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { SliderMarks } from "antd/es/slider";
import style from "./Icon.module.scss";

export function SalaryCalcSlider(props: {
  setCounter: Dispatch<SetStateAction<number>>;
  minNumber: number;
  maxNumber: number;
  helpText: string;
  marks: SliderMarks;
  step: number;
  default: number;
}): ReactElement {
  const sliderChange = (value: number) => {
    props.setCounter(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Slider
        data-cy="responsibilitySlider"
        min={props.minNumber}
        max={props.maxNumber}
        marks={props.marks}
        step={props.step}
        defaultValue={props.default}
        style={{ width: "25vw", maxWidth: "400px", minWidth: "180px" }}
        onChange={sliderChange}
      />
      <Tooltip title={props.helpText} placement="right">
        <InfoCircleOutlined className={style["icon"]} />
      </Tooltip>
    </div>
  );
}
