import './App.css';
import Map from './components/Map'
import SatDetails from './components/SatDetails';


function App() {
  return (
    <div className="App">
      <div className="app-title">
        <h1>
          Satellite
          tracker
        </h1>
      </div>
      <div className="content-container">
        <div className="sat-details">
          <SatDetails />
        </div>
        <div className="sat-map">
          <Map/>
        </div>
      </div>
    </div>
  );
}

export default App;
