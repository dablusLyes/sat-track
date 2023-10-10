import './App.css';
import Map from './components/Map'
import SatDetails from './components/SatDetails.js';
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h1>
          Satellite
          tracker
        </h1>
        <NavMenu/>
      </div>
      <div className="content-container">
        <div className="sat-map">
          <Map/>
        </div>
      </div>
    </div>
  );
}

export default App;
