import { Layout, Slider, Select, Row, Col, InputNumber, Divider } from "antd";
import "./App.css";
import { ReactElement, useEffect, useState } from "react";
import type { SliderMarks } from "antd/es/slider";
import { Test1 } from "./test1";

const { Header, Content, Footer, Sider } = Layout;
const marks: SliderMarks = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

function App(props: { something: string; someother?: number }): ReactElement {
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
            <div style={{ minWidth: "450px" }}>
              <div className="selector">
                <h4 className="txt">Text 1 Text</h4>
                <Select
                  style={{ width: 120 }}
                  defaultValue={1}
                  onChange={handleselect1Change}
                  options={[
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                  ]}
                />
              </div>
              <div className="selector">
                <h4 className="txt">Text 2 text</h4>
                <Select
                  style={{ width: 120 }}
                  onChange={handleselect2Change}
                  defaultValue={1}
                  options={[
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                  ]}
                />
              </div>
              <div className="selector">
                <h4 className="txt">Text 3 text</h4>
                <div className="test">
                  <Row>
                    <Col span={12}>
                      <Slider
                        marks={marks}
                        min={0}
                        max={4}
                        style={{ width: "100px" }}
                        onChange={sliderChange}
                        value={
                          typeof slidercounter === "number" ? slidercounter : 0
                        }
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        controls={false}
                        min={1}
                        max={20}
                        style={{
                          margin: "0 76px",
                          width: "100px",
                          textAlign: "left",
                        }}
                        /*onChange={sliderChange} arrows disabled till I figure  why this doesnt work*/
                        value={slidercounter}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
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
