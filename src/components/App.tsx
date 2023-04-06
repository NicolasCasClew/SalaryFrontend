import { ConfigProvider, Layout, theme } from "antd";
import { ReactElement, useState } from "react";
import { Page } from "./page";
import { SalaryHeader } from "./header";
import styles from "./App.module.scss";

const { Content, Footer, Sider } = Layout;

function App(): ReactElement {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Layout>
          <SalaryHeader setthemeChange={setDarkTheme}></SalaryHeader>
          <Layout>
            <Sider
              breakpoint="md"
              width={150}
              collapsedWidth={18}
              className={styles["sider"]}
            />
            <Content className={styles["content"]}>
              {" "}
              <Page></Page>
            </Content>
            <Sider
              breakpoint="lg"
              width={150}
              collapsedWidth={18}
              className={styles["sider"]}
            />
          </Layout>
          <Footer className={styles["footer"]}>Footer</Footer>
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default App;
