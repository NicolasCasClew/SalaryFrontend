import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

export const Home = () => {
  const [data]: any = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item: string) => {
          return (
            <ul>
              <li>item.title</li>
            </ul>
          );
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Home />);
