import { Divider } from "antd";
import "./App.css";
import { ReactElement, useEffect, useState } from "react";
import { SliderAdab } from "./slider";
import { Selector } from "./select";
import classes from "./page.module.scss";

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
        <h3 className={classes["input_title"]}>Expertise</h3>
        <h3 className={classes["input_title"]}>Responsibility</h3>
        <h3 className={classes["input_title"]}>Tenure </h3>
      </div>
      <div className={classes["left_content"]}>
        <Selector setSelectCounter={setSelectCounter}></Selector>
        <Selector setSelectCounter={setSelect2Counter}></Selector>
        <SliderAdab setSliderCounter={setsliderCounter}></SliderAdab>
      </div>
      <Divider
        type="vertical"
        style={{
          //cant modify it through the css
          height: "440px",
          borderLeft: "1px solid gray",
          alignSelf: "center",
          display: "flex",
        }}
      />
      <div className={classes["output_divider"]}>
        <h1 style={{ paddingTop: "45px" }}>Select 1 = {selectCounter}</h1>
        <h1>Select 2 = {select2counter}</h1>
        <h1>Slider = {slidercounter}</h1>
        <h1>result = {result}</h1>
      </div>
    </div>
  );
}
