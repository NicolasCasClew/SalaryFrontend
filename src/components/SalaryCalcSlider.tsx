import { Dispatch, ReactElement, SetStateAction } from "react";
import { Slider, Tooltip } from "antd";

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
    <Tooltip title={props.helpText} placement="right">
      <Slider
        min={props.minNumber}
        max={props.maxNumber}
        step={props.step}
        defaultValue={props.maxNumber}
        style={{ width: "25vw", maxWidth: "400px", minWidth: "150px" }}
        onChange={sliderChange}
      />
    </Tooltip>
  );
}
