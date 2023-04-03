import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Select } from "antd";

export function Selector(props: {
  setSelectCounter: Dispatch<SetStateAction<number>>;
}): ReactElement {
  const handleselectChange = (value: number) => {
    console.log(`selected ${value}`);
    props.setSelectCounter(value);
  };
  return (
    <Select
      style={{ width: 120 }}
      onChange={handleselectChange}
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
