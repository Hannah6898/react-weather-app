import "./App.css";
import WeatherApp from "./WeatherApp";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <WeatherApp defaultcity="London" />
      <Forecast />
    </div>
  );
}

export default App;
