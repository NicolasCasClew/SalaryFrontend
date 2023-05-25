import { ConfigProvider, Layout, theme } from "antd";
import { ReactElement, useState } from "react";
import { Page } from "./page";
import { SalaryHeader } from "./header";
import styles from "./App.module.scss";
import { SalaryOutDTO } from "./salaryOut.model";

const { Content, Footer, Sider } = Layout;

function SalaryContent({
  setReceivedData,
}: {
  setReceivedData: React.Dispatch<React.SetStateAction<SalaryOutDTO | null>>;
}): ReactElement {
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
              breakpoint="xl"
              width={"15vw"}
              collapsedWidth={"1rem"}
              className={styles["sider"]}
            />
            <Content className={styles["content"]}>
              <Page setReceivedData={setReceivedData}></Page>
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

export default SalaryContent;
