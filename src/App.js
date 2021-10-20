import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DoctorDetail from './components/DoctorDetail/DoctorDetail';
import DoctorsAll from './components/DoctorsAll/DoctorsAll';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
      <AuthProvider>
        <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/alldoctors'>
            <DoctorsAll></DoctorsAll>
          </PrivateRoute>
          <PrivateRoute path='/doctordetail/:doctorId'>
            <DoctorDetail></DoctorDetail>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;
