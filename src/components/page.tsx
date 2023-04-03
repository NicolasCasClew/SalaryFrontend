import { Layout, Slider, Select, Row, Col, InputNumber, Divider } from "antd";
import "./App.css";
import { ReactElement, useEffect, useState } from "react";
import type { SliderMarks } from "antd/es/slider";
import { SliderAdab } from "./slider";
import { Selector } from "./select";

const marks: SliderMarks = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

export function Page(): ReactElement {
  return (
    <div style={{ minWidth: "550px" }}>
      <div className="selector">
        <h4 style={{ paddingRight: "40px" }}>Selector 1</h4>
        <Selector></Selector>
      </div>
      <div className="selector">
        <h4 style={{ paddingRight: "40px" }}>Selector 2</h4>
        <Selector></Selector>
      </div>
      <div className="selector">
        <h4 style={{ paddingRight: "40px" }}>Slider 1 </h4>
        <div className="test">
          <SliderAdab></SliderAdab>
        </div>
      </div>
    </div>
  );
}
