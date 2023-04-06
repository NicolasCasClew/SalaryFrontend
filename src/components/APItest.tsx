import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

export const Home = () => {
  const [data]: any = useFetch(
    "https://jsonplaceholder.typicode.com/users/1/albums"
  );

  return (
    <div>
      {data &&
        data.map((item: any) => {
          return (
            <ul>
              <li>{item.title}</li>
            </ul>
          );
        })}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Home />);
