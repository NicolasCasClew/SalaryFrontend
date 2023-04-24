import { Dispatch, ReactElement, SetStateAction } from "react";
import { Slider, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

export function SalaryCalcSlider(props: {
  setCounter: Dispatch<SetStateAction<number>>;
  minNumber: number;
  maxNumber: number;
  helpText: string;
  step: number;
}): ReactElement {
  const sliderChange = (value: number) => {
    props.setCounter(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Slider
        min={props.minNumber}
        max={props.maxNumber}
        step={props.step}
        defaultValue={props.maxNumber}
        style={{ width: "25vw", maxWidth: "400px", minWidth: "180px" }}
        onChange={sliderChange}
      />
      <Tooltip title={props.helpText} placement="right">
        <InfoCircleOutlined style={{ paddingLeft: "15px" }} />
      </Tooltip>
    </div>
  );
}
