import { ConfigProvider, Layout, theme } from "antd";
import { ReactElement, useState } from "react";
import { Page } from "./page";
import { SalaryHeader } from "./header";
import styles from "./App.module.scss";
import InfiniScroll from "./infiniList";
import { DBForm } from "./dbInputs";
import { Route, Routes } from "react-router-dom";
import SalaryContent from "./SalaryContent";
import { SalaryOutDTO } from "./salaryOut.model";

const { Content, Footer, Sider } = Layout;

function Appi(): ReactElement {
  const [darkTheme, setDarkTheme] = useState(true);
  const [receivedData, setReceivedData] = useState<SalaryOutDTO | null>(null);

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
              breakpoint="xl"
              width={"15vw"}
              collapsedWidth={"1rem"}
              className={styles["sider"]}
            />
            <Content className={styles["content"]}>
              <Routes>
                <Route
                  path="/"
                  element={<Page setReceivedData={setReceivedData} />}
                />{" "}
                <Route
                  path="/admin"
                  element={
                    receivedData ? <DBForm salaryOutDTO={receivedData} /> : null
                  }
                />
              </Routes>
            </Content>
            <Sider
              breakpoint="xl"
              width={"15vw"}
              collapsedWidth={"1rem"}
              className={styles["sider"]}
            />
          </Layout>
          <Footer className={styles["footer"]}></Footer>
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default Appi;
