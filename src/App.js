import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DoctorDetail from './components/DoctorDetail/DoctorDetail';
import DoctorsAll from './components/DoctorsAll/DoctorsAll';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/alldoctors'>
            <DoctorsAll></DoctorsAll>
          </Route>
          <Route path='/doctordetail/:doctorId'>
            <DoctorDetail></DoctorDetail>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
