import { Dispatch, ReactElement, SetStateAction } from "react";
import { Slider, Tooltip } from "antd";

export function SalaryCalcSlider(props: {
  setTenureCounter: Dispatch<SetStateAction<number>>;
  minNumber: number;
  maxNumber: number;
  helpText: string;
}): ReactElement {
  const sliderChange = (value: number) => {
    props.setTenureCounter(value);
  };

  return (
    <Tooltip title={props.helpText} placement="right">
      <Slider
        min={props.minNumber}
        max={props.maxNumber}
        defaultValue={props.maxNumber}
        style={{ width: "160px" }}
        onChange={sliderChange}
      />
    </Tooltip>
  );
}
