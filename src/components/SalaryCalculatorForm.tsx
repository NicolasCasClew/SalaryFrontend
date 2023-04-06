import React, { useState } from "react";
import { Form, Select } from "antd";
import { SalaryCalcDropDown } from "./SalaryCalcSelect";
import { SalaryCalcSlider } from "./SalaryCalcSlider";
import classes from "./page.module.scss";

const { Option } = Select;

const areas = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

const SalaryCalculatorFrom: React.FC = () => {
  const [form] = Form.useForm();
  const [expCounter, setexpCounter] = useState(1);

  return (
    <Form
      form={form}
      name="dynamic_form_complex"
      style={{ minWidth: "60em" }}

      //autoComplete="off"
    >
      <Form.Item
        name="expertise"
        label="Expertise"
        className={classes["input_divider"]}
      >
        <SalaryCalcDropDown setexpCounter={setexpCounter}></SalaryCalcDropDown>
        <h1>Select 1 = {expCounter}</h1>
      </Form.Item>
      <Form.Item name="responsibility" label="Responsibility">
        <SalaryCalcDropDown setexpCounter={setexpCounter}></SalaryCalcDropDown>
        <h1>Select 1 = {expCounter}</h1>
      </Form.Item>
      <Form.Item name="tenure" label="Tenure">
        <SalaryCalcSlider settenureCounter={setexpCounter}></SalaryCalcSlider>
        <h1>Select 1 = {expCounter}</h1>
      </Form.Item>
    </Form>
  );
};

export default SalaryCalculatorFrom;
