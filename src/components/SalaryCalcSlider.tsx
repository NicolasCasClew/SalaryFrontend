import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { Slider, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { SliderMarks } from "antd/es/slider";

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

  const minim: number = props.minNumber;
  const maxi: number = props.maxNumber;
  //const testmax: number = 4;
  //minim = props.minNumber;
  //maxi = props.maxNumber;
  const minTxt: string = minim + "";
  const maxTxt: string = maxi + "";
  const marks = {
    [minim]: minTxt,
    [maxi]: maxTxt,
  };
  console.log("the min=" + minim + "   and the max=" + maxi);
  console.log(marks);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Slider
        min={props.minNumber}
        max={props.maxNumber}
        marks={marks}
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
