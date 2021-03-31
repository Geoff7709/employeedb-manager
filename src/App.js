import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios'
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
      const compare = (a, b) => {
        const nameA = a.name.last
        const nameB = b.name.last

        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      }
      const sortedResults = results.sort(compare)
      console.log(sortedResults)
      setRoster(sortedResults)
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
            <Route path='/'>
              <Roster />
            </Route>
          </EmployeeContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
