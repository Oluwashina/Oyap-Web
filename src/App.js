import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserLogin from './pages/Login/userLogin'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={UserLogin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
