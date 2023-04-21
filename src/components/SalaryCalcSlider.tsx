import { Dispatch, ReactElement, SetStateAction } from "react";
import { Slider } from "antd";

export function SalaryCalcSlider(props: {
  setTenureCounter: Dispatch<SetStateAction<number>>;
  minNumber: number;
  maxNumber: number;
}): ReactElement {
  const sliderChange = (value: number) => {
    props.setTenureCounter(value);
  };

  return (
    <Slider
      min={props.minNumber}
      max={props.maxNumber}
      style={{ width: "160px" }}
      onChange={sliderChange}
    />
  );
}
