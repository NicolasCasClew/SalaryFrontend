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
  const [select1counter, setselect1Counter] = useState(1);
  const [select2counter, setselect2Counter] = useState(1);
  const [slidercounter, setsliderCounter] = useState(0);
  const [result, setResult] = useState(0);

  const handleselect1Change = (value: number) => {
    console.log(`selected ${value}`);
    setselect1Counter(value);
  };
  const handleselect2Change = (value: number) => {
    console.log(`selected ${value}`);
    setselect2Counter(value);
  };

  const sliderChange = (value: number) => {
    console.log(`selected ${value}`);
    setsliderCounter(value);
  };

  useEffect(() => {
    setResult(() => select1counter * select2counter * slidercounter);
  }, [select1counter, select2counter, slidercounter]);

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
            <Divider
              type="vertical"
              style={{ height: "500px", borderLeft: "1px solid gray" }}
            />
            <div style={{ paddingLeft: "15%" }}>
              <h1>Select 1 = {select1counter}</h1>
              <h1>Select 2 = {select2counter}</h1>
              <h1>Slider = {slidercounter}</h1>
              <h1>result = {result}</h1>
              {something}
            </div>
          </Content>
          <Sider className="siderStyle">Sider</Sider>
        </Layout>
        <Footer className="footerStyle">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
