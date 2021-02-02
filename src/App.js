import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ReactDocs from './components/ReactDocs';
import WebDevSimplified from './components/WebDevSimplified';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/react-docs' component={ReactDocs} />
        <Route path='/web-dev-simplified' component={WebDevSimplified} />
      </Switch>
    </Router>
  );
}

export default App;
