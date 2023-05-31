import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Button, Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReloadOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

interface DataType {
  id: string;
  name: string;
  surname: string;
  mail: string;
}

export function InfiniScroll(props: {
  setId: Dispatch<SetStateAction<string | null>>;
  //getUserById: (selectedID: string) => void;
}): ReactElement {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [selectedID, setSelectedID] = useState("");

  const log = (id: string) => {
    console.log(id);
    setSelectedID(id);
    props.setId(id);
    //props.getUserById(id);
  };
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((body) => {
        setData(body);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const updateList = () => {
    setData([]); // Clear the existing data
    loadMoreData(); // Fetch new data
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <>
      <div
        id="scrollableDiv"
        style={{
          height: 200,
          width: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
          color: "red",
          backgroundColor: "gray",
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 10}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={
            <Divider plain>This is the end, beautiful friend</Divider>
          }
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id} onClick={() => log(item.id)}>
                <List.Item.Meta
                  title={
                    <a>
                      {item.name} {item.surname}
                    </a>
                  }
                  description={item.mail}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "15px",
        }}
      >
        <Button
          type="primary"
          onClick={updateList}
          icon={<ReloadOutlined />}
        ></Button>
        <Title style={{ margin: "5px" }} level={5} onClick={updateList}>
          Reload List{" "}
        </Title>
      </div>
    </>
  );
}

export default InfiniScroll;
