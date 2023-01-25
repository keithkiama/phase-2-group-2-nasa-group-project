import NavBar from './NavBar';
import FetchData from './FetchData';
import Home from './Home';
//this is the parent component to all child component

function App() {
  return (
  <div className = "App">
    <NavBar />
    <Home />
    <FetchData />

  </div>
  );
}

export default App;
