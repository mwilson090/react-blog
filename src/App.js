import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookShelfPage from './pages/BookShelfPage';
import DataPage from './pages/DataPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/bookshelf" component={BookShelfPage} />
            <Route path="/data" component={DataPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
