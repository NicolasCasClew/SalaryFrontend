import React, { useState } from "react";
import { Button, Form, Input, Select, Space } from "antd";
import { SalaryCalcDropDown } from "./SalaryCalcSelect";

const { Option } = Select;

const areas = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

const SalaryCalculatorFrom: React.FC = () => {
  const [form] = Form.useForm();

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };
  const [expCounter, setexpCounter] = useState(1);

  return (
    <Form
      form={form}
      name="dynamic_form_complex"
      style={{ maxWidth: 600 }}
      //autoComplete="off"
    >
      <Form.Item
        name="Tenure"
        label="Tenure"
        rules={[{ required: true, message: "Insert Value" }]}
      >
        <SalaryCalcDropDown setexpCounter={setexpCounter}></SalaryCalcDropDown>
        <h1>Select 1 = {expCounter}</h1>
      </Form.Item>
    </Form>
  );
};

export default SalaryCalculatorFrom;
