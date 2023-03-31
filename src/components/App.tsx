import { Layout, Menu, Slider, Select } from "antd";
import "./App.css";
import { useState } from "react";
import { Test1 } from "./test1";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [counter, setCounter] = useState(0);
  const handleChange = (value: number) => {
    console.log(`selected ${value}`);
    setCounter(value);
  };

  const sliderChange = (value: number) => {
    console.log(`selected ${value}`);
    setCounter(value);
  };
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
                  onChange={handleChange}
                  options={[
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                  ]}
                />
              </div>
              <div className="selector">
                <h4 className="txt">Text 2 texto</h4>
                <Select
                  style={{ width: 120 }}
                  onChange={handleChange}
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
                  <Slider
                    className="test"
                    onChange={sliderChange}
                    max={4}
                    min={0}
                    defaultValue={3}
                  />
                </div>
              </div>
            </div>
            <h1>{counter}</h1>
          </Content>
          <Sider className="siderStyle">Sider</Sider>
        </Layout>
        <Footer className="footerStyle">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
