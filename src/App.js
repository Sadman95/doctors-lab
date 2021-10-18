import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';

function App() {
  return (
      <Router>
        <NavigationBar></NavigationBar>
      </Router>
  );
}

export default App;
