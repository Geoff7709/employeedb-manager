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
      const { data } = await axios('https://randomuser.me/api/?seed=oidg&results=100&nat=FR,GB,IE,NO,NL,NZ,TR,US')
      const results = data.results
      console.log(results)
      setRoster(results)
    } catch (err) {
      console.error(err)
    }
  }



  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/search'>
            <Search />
          </Route>
          <EmployeeContext.Provider value={roster}>
            <Route path='/roster'>
              <Roster />
            </Route>
          </EmployeeContext.Provider>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
