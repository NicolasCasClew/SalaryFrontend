import { ReactElement, useState } from "react";
import { Select, Slider, Row, Col, InputNumber } from "antd";
import type { SliderMarks } from "antd/es/slider";

const marks: SliderMarks = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

export function SliderAdab(): ReactElement {
  const data: number = 1234;
  const sliderChange = (value: number) => {
    console.log(`selected ${value}`);
    setsliderCounter(value);
  };

  const [slidercounter, setsliderCounter] = useState(0);
  return (
    <Row>
      <Col span={12}>
        <Slider
          marks={marks}
          min={0}
          max={4}
          style={{ width: "100px" }}
          onChange={sliderChange}
          value={typeof slidercounter === "number" ? slidercounter : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          controls={false}
          min={1}
          max={20}
          style={{
            margin: "0 76px",
            width: "45px",
            textAlign: "left",
          }}
          /*onChange={sliderChange} arrows disabled till I figure  why this doesnt work*/
          value={slidercounter}
        />
      </Col>
    </Row>
  );
}
