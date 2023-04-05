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
          <Sider
            breakpoint="sm"
            width={150}
            collapsedWidth={18}
            className={styles["sider"]}
          />
          <Content className={styles["content"]}>
            {" "}
            <Page></Page>
          </Content>
          <Sider
            breakpoint="md"
            width={150}
            collapsedWidth={18}
            className={styles["sider"]}
          />
        </Layout>
        <Footer className={styles["footer"]}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
