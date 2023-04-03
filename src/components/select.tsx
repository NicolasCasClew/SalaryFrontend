import { ReactElement, useState } from "react";
import { Select } from "antd";

export function Selector(): ReactElement {
  const data: number = 1234;
  const sliderChange = (value: number) => {
    console.log(`selected ${value}`);
    setsliderCounter(value);
  };

  const [slidercounter, setsliderCounter] = useState(0);
  return (
    <Select
      style={{ width: 120 }}
      //onChange={handleselect2Change}
      defaultValue={1}
      options={[
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
      ]}
    />
  );
}
