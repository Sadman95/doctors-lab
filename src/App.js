import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DoctorsAll from './components/DoctorsAll/DoctorsAll';
import Home from './components/Home/Home';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';

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
        </Switch>
      </Router>
  );
}

export default App;
