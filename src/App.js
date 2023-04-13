import SearchFilter from "./SearchFilter";
import "./styles.css";
import { data } from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SearchFilter data={data} />
    </div>
  );
}
