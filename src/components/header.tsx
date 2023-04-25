import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Button, Layout, Space } from "antd";
import styles from "./header.module.scss";
import logo from "../assets/adab-logo.png";

const { Header } = Layout;

export function SalaryHeader(props: {
  setthemeChange: Dispatch<SetStateAction<boolean>>;
}): ReactElement {
  const [isTrue, setIsTrue] = useState(false);
  const themeChange = (value: boolean) => {
    props.setthemeChange(isTrue);
    setIsTrue(!isTrue);
  };

  return (
    <Header className={styles["header"]}>
      <div className={styles["header_items_left"]}>
        {/* <img className={styles["logo"]} src={logo} alt={logo} /> */}
        <h1 style={{ fontSize: "23px" }}>Adabtive Salary Tool</h1>
      </div>
      <div className={styles["header_items_right"]}>
        <Button
          className={styles["light_mode_button"]}
          onClick={() => themeChange(isTrue)}
        >
          Light/Night
        </Button>
      </div>
    </Header>
  );
}
