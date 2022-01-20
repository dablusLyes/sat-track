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
        <div>
          <SatDetails />
        </div>
        <div>
          <Map/>
        </div>
      </div>
    </div>
  );
}

export default App;
