import { ReactElement } from "react";
import { Layout } from "antd";
import styles from "./header.module.scss";

const { Header } = Layout;

export function SalaryHeader(): ReactElement {
  return (
    <Header className={styles["header"]}>
      <img className={styles["logo"]} src="adab-logo.png" alt="" />
      <h1 style={{ fontSize: "23px" }}>Salary Tool</h1>
    </Header>
  );
}
