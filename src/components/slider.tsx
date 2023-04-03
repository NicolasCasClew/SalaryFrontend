import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Select, Slider, Row, Col, InputNumber } from "antd";
import type { SliderMarks } from "antd/es/slider";

export function SliderAdab(props: {
  setSliderCounter: Dispatch<SetStateAction<number>>;
}): ReactElement {
  const data: number = 1234;
  const sliderChange = (value: number) => {
    console.log(`selected ${value}`);
    props.setSliderCounter(value);
  };

  const [slidercounter, setsliderCounter] = useState(0);
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={4}
          style={{ width: "160px" }}
          onChange={sliderChange}
        />
      </Col>
    </Row>
  );
}
