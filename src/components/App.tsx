import { Layout } from "antd";
import "./App.css";
import { ReactElement } from "react";
import { Page } from "./page";
import styles from "./App.module.scss";

const { Header, Content, Footer, Sider } = Layout;

function App(): ReactElement {
  return (
    <div>
      <Layout>
        <Header className={styles["headerStyle"]}>
          <img
            className={styles["logo"]}
            src="https://adabtive.nl/wp-content/uploads/2023/02/logo2-100.png"
            alt=""
          />
          <h1 style={{ fontSize: "23px" }}>Salary Tool</h1>
        </Header>
        <Layout>
          <Sider className={styles["siderStyle"]}>Sider</Sider>
          <Content className={styles["contentStyle"]}>
            {" "}
            <Page></Page>
          </Content>
          <Sider className={styles["siderStyle"]}>Sider</Sider>
        </Layout>
        <Footer className={styles["footerStyle"]}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
