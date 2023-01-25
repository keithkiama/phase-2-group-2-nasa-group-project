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
     <NavBar />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route exact path = "/" element = {<FetchData />}/>
       <Route exact path = "/Explore" element = {<Explore/>} />
       <Route exact path = "/History" element = {<History/>} />
       <Route exact path = "/Learn" element = {<Learn/>} />
    </Routes>
  </div>
  );
}

export default App;
