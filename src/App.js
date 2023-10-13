import './App.css';
import Map from './components/Map'
import SatDetails from './components/SatDetails.js';
import NavMenu from "./components/NavMenu";
import satSvg from './FP_Satellite_icon.svg'



function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h1>
          Satellite
          <img className='satLogo' src={satSvg}></img>
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
