import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserLogin from './pages/Login/userLogin'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={UserLogin} />
      </Switch>
    </Router>
  );
}

export default App;
