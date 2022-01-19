import './App.css';
import Map from './components/Map'



function App() {
  return (
    <div className="App">
      <div className="app-title">
        <h1>Satellite tracker</h1>
      </div>
      <div>
        <Map/>
      </div>
    </div>
  );
}

export default App;
