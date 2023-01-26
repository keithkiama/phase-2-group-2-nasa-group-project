import NavBar from "./NavBar"
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import Explore from './Explore';
import History from './History';
import Learn from './Learn';

//this is the parent component to all child component

function App() {
  return (
 <div className = "App">
    <NavBar />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route  path = "explore" element = {<Explore/>} />
       <Route  path = "history" element = {<History/>} />
       <Route  path = "learn" element = {<Learn/>} />
    </Routes>
  </div>
  );
}

export default App;
