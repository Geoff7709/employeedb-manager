import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios'
import Home from './pages/Home'
import Search from './pages/Search'
import Roster from './pages/Roster'
import Navbar from './components/Navbar'
import './App.css'
import EmployeeContext from './utils/EmployeeContext'

function App() {
  const [roster, setRoster] = useState([])
  // const [employeeState, setEmployeeState] = useState({

  // })
  useEffect(() => {
    fetchEmployeeRoster()
  }, [])
  const fetchEmployeeRoster = async () => {
    try {
      const { data } = await axios('https://randomuser.me/api/?seed=oidg&results=100&nat=FR,GB,IE,IR,NO,NL,NZ,TR,US')
      const results = data.results
      console.log(results)
      setRoster(results)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => console.log(roster), [roster])

  return (
    <Router>
      <Navbar />
      <EmployeeContext.Provider value={roster}>
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
      </EmployeeContext.Provider>
    </Router>
  );
}

export default App;
