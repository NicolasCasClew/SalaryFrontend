import { Dispatch, ReactElement, SetStateAction } from "react";
import { Slider } from "antd";

export function SalaryCalcSlider(props: {
  settenureCounter: Dispatch<SetStateAction<number>>;
}): ReactElement {
  const sliderChange = (value: number) => {
    props.settenureCounter(value);
  };

  return (
    <Slider
      min={0}
      max={4}
      style={{ width: "160px" }}
      onChange={sliderChange}
    />
  );
}
