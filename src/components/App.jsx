import NavBar from './NavBar';
import FetchData from './FetchData';
import Home from './Home';
import Learn from './Learn'

function App() {
  return (
  <div className = "App">
    <NavBar />
    <Home />
    <FetchData />
    <Learn />
    <button>Click here to Learn more about solar system</button>
  </div>
  );
}

export default App;
