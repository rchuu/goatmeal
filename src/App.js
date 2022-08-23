import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/home';
import Header from './Components/header';
import Footer from './Components/footer';

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
