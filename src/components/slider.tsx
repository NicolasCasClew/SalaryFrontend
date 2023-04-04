import { Dispatch, ReactElement, SetStateAction } from "react";
import { Slider, Row, Col } from "antd";

export function SliderAdab(props: {
  setSliderCounter: Dispatch<SetStateAction<number>>;
}): ReactElement {
  const sliderChange = (value: number) => {
    props.setSliderCounter(value);
  };
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
