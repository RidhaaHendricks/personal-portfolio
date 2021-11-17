import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Navbar />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/contact">
              <Navbar />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
