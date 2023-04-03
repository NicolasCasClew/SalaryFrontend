import { Layout, Slider, Select, Row, Col, InputNumber, Divider } from "antd";
import "./App.css";
import { ReactElement, useEffect, useState } from "react";
import type { SliderMarks } from "antd/es/slider";
import { SliderAdab } from "./slider";
import { Selector } from "./select";
import classes from "./page.module.scss";

const marks: SliderMarks = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

export function Page(): ReactElement {
  const [result, setResult] = useState(0);
  const [selectCounter, setSelectCounter] = useState(1);
  const [select2counter, setSelect2Counter] = useState(1);
  const [slidercounter, setsliderCounter] = useState(0);
  useEffect(() => {
    setResult(() => selectCounter * select2counter * slidercounter);
  }, [selectCounter, select2counter, slidercounter]);

  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      <div className={classes["left_content"]}>
        <div className={classes["input_selector"]}>
          <h4 className={classes["input_title"]}>Expertise</h4>
          <Selector setSelectCounter={setSelectCounter}></Selector>
        </div>
        <div className={classes["input_selector"]}>
          <h4 className={classes["input_title"]}>Responsibility</h4>
          <Selector setSelectCounter={setSelect2Counter}></Selector>
        </div>
        <div className={classes["input_selector"]}>
          <h4 className={classes["input_title"]}>Tenure </h4>
          <div className="test">
            <SliderAdab setSliderCounter={setsliderCounter}></SliderAdab>
          </div>
        </div>
      </div>
      <Divider
        type="vertical"
        style={{
          //cant modify it through the css
          height: "450px",
          borderLeft: "1px solid gray",
          alignSelf: "center",
        }}
      />
      <div className={classes["output_divider"]}>
        <h1 style={{ paddingTop: "120px" }}>Select 1 = {selectCounter}</h1>
        <h1>Select 2 = {select2counter}</h1>
        <h1>Slider = {slidercounter}</h1>
        <h1>result = {result}</h1>
      </div>
    </div>
  );
}
