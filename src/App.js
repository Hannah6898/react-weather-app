import "./App.css";
import SearchBar from "./SearchBar";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <SearchBar defaultcity="London" />
      <Forecast />
    </div>
  );
}

export default App;
