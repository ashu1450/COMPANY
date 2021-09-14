import React from 'react'
import './App.css';

// import SideBar from './components/SideBar/SideBar';

 import NavBar from './components/NavBar';
 import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
  import Home from './components/Pages/Home/Home';
  import Companies from './components/Pages/Companies/Companies';
 // import Archives from './components/pages/Archives/Archives';
  import Notification from './components/Pages/Notification/Notification';
  import Login from './components/Pages/Login/Login';
  import Profile from './components/Pages/Profile/Profile';
  import SearchBar from './components/Pages/SearchBar';
  import Ans from './components/Pages/Ans/Ans';
  import MyProfile from './components/Pages/Profile/MyProfile';
  import Setting from './components/Pages/Profile/Setting';
  
 
function App() {
  // const [progress, setProgress] = useState(0);
  return (
    <div className="App">
       <Router>
           <NavBar/>

             <Switch>
             <Route  exact path="/"><Home  /></Route>
                 <Route  path="/home"><Home  /></Route>
                 <Route exact path="/companies"><Companies/></Route>
                 <Route exact path="/ans"><Ans/></Route>
                 <Route exact path="/notifications"><Notification/></Route>
                 <Route exact path="/search"><SearchBar/></Route>
                 <Route exact path="/login"><Login/></Route>
                 <Route exact path="/profile"><Profile/></Route>
                 * <Route exact path="/MyProfile"><MyProfile/></Route> *
                 <Route exact path="/Setting"><Setting/></Route>


             </Switch>
       </Router>

    </div>
  );
}

export default App;
