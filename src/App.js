import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Search from './pages/Search'
import Roster from './pages/Roster'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
        <Router>
          <Navbar />
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/roster'>
              <Roster />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
