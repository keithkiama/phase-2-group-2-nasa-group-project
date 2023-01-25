import NavBar from './NavBar';
import FetchData from './FetchData';
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
    <Home />
    <FetchData />
    <Learn />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route  path = "/Explore" element = {<Explore/>} />
       <Route  path = "/History" element = {<History/>} />
       <Route  path = "/Learn" element = {<Learn/>} />
     
    </Routes>
   
  </div>
  );
}

export default App;
