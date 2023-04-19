import { Dispatch, ReactElement, SetStateAction } from "react";
import { Slider } from "antd";

export function SalaryCalcSlider(props: {
  setTenureCounter: Dispatch<SetStateAction<number>>;
}): ReactElement {
  const sliderChange = (value: number) => {
    props.setTenureCounter(value);
  };

  return (
    <Slider
      min={1}
      max={15}
      style={{ width: "160px" }}
      onChange={sliderChange}
    />
  );
}
