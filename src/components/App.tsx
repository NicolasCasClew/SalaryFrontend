import { Layout } from "antd";
import { ReactElement } from "react";
import { Page } from "./page";
import { SalaryHeader } from "./header";
import styles from "./App.module.scss";
//import { Home } from "./useFetch";

const { Content, Footer, Sider } = Layout;

function App(): ReactElement {
  return (
    <div>
      <Layout>
        <SalaryHeader></SalaryHeader>
        <Layout>
          <Sider className={styles["sider"]}>Sider</Sider>
          <Content className={styles["content"]}>
            {" "}
            <Page></Page>
          </Content>
          <Sider className={styles["sider"]}>Sider</Sider>
        </Layout>
        <Footer className={styles["footer"]}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
