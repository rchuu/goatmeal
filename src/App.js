import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './Components/home';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
