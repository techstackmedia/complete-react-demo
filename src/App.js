import { createRoot } from "react-dom";
import SearchParams from "./SearchParams";
import { createRoot } from "react-dom"; // {render} - no run time cost (done by a stattic analysis)
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
