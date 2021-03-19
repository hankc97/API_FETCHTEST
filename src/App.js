import './App.css';
import FetchRandomUser from './frontend/FetchRandomUser.jsx';
import PlanetSearch from './frontend/AutoCompleteSearch'

function App() {
  return (
    <div className="App">
      <FetchRandomUser />
      <PlanetSearch />
    </div>
  );
}

export default App;
