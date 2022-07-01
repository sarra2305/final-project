import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/home';
import AboutUs from './Components/AboutUs/aboutUs'
import Destination from './Components/Destination/vac'
import NavBar from './Components/HomePage/navBar'
import Register from './Components/Register/register';
import SignUp from './Components/Register/SignUp'
import Details from './Components/Destination/Details'
import tourDetails from './Components/Destination/tourDetails'
import Reservation from './Components/Reservation/reservation'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/AboutUs" component={AboutUs} />
        <Route path ="/login" component ={Register} />
        <Route path="/SignUp"  component={SignUp}/>
        <Route path="/destination" component={Destination} />
        <Route path="/Details/:id"  component={Details} />
        <Route path="/tourDetails"  component={tourDetails} />
        <Route path="/Reservation"  component={Reservation} />


      </Switch>
        
        
        
      
    </div>
  );
}

export default App;
