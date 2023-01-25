
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import FetchData from './FetchData';
import History from './History';
import Learn from './Learn';

//this is the parent component to all child component

function App() {
  return (
 <div className = "App">
    {/* <FetchData /> */}
    {/* <Learn /> */}
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route  path = "FetchData" element = {<FetchData/>} />
       <Route  path = "History" element = {<History/>} />
       <Route  path = "Learn" element = {<Learn/>} />
     
    </Routes>/
   
  </div>
  );
}

export default App;
