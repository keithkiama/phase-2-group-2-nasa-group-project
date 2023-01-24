import '../styles/App.css';
import NavBar from './NavBar';
import Cards from './Cards';
import MoreAboutSolarSytem from './MoreAboutSolarSystem';

function App() {
  return (
  <div className = "App">
    <NavBar />
    <Cards />
    <MoreAboutSolarSytem/>
  </div>
  );
}

export default App;
