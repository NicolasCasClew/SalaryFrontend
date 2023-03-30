import { Layout, Menu } from "antd";
import "./App.css";
import { Test1 } from "./test1";

const { Header, Content, Footer, Sider } = Layout;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const sliderChange = (value: number) => {
  console.log(`selected ${value}`);
};

function App() {
  return (
    <div>
      <Layout>
        <Header className="headerStyle">Header</Header>
        <Layout>
          <Sider className="siderStyle">Sider</Sider>
          <Content className="contentStyle">
            {" "}
            <Test1></Test1>
          </Content>
          <Sider className="siderStyle">Sider</Sider>
        </Layout>
        <Footer className="footerStyle">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
