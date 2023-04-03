import { Layout, Slider, Select, Row, Col, InputNumber, Divider } from "antd";
import "./App.css";
import { ReactElement, useEffect, useState } from "react";
import type { SliderMarks } from "antd/es/slider";
import { Page } from "./page";

const { Header, Content, Footer, Sider } = Layout;
const marks: SliderMarks = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

function App(props: { something?: string; someother?: number }): ReactElement {
  const { something, someother } = props;

  const [result, setResult] = useState(0);

  return (
    <div>
      <Layout>
        <Header className="headerStyle">
          <img
            className="logo"
            src="https://adabtive.nl/wp-content/uploads/2023/02/logo2-100.png"
          />
          <h1 style={{ fontSize: "23px" }}>Salary Tool</h1>
        </Header>
        <Layout>
          <Sider className="siderStyle">Sider</Sider>
          <Content className="contentStyle">
            {" "}
            <Page></Page>
          </Content>
          <Sider className="siderStyle">Sider</Sider>
        </Layout>
        <Footer className="footerStyle">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
