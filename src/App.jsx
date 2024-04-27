import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <li>
        <Link to="page1">Page 1</Link>
      </li>
      <li>
        <Link to="page2">Page 2</Link>
      </li>
      <li>
        <Link to="page3">Page 3</Link>
      </li>
    </>
  );
}

export default App;
