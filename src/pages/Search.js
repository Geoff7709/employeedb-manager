import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EmployeeCard from '../components/EmployeeCard'
import EmployeeContext from '../utils/EmployeeContext'

function Search() {
  const [roster, setRoster] = useState([])
//   useEffect(() => {
//     fetchEmployeeByLoc()
//   }, [])

  const fetchEmployeeByLoc = async (country) => {
    try {
      const { data } = await axios('https://randomuser.me/api/?seed=oidg&results=100&nat=FR,GB,IE,NO,NL,NZ,TR,US')
      const results = data.results
      console.log(results)
      const filteredResults = results.filter((result) => result.nat === country)
      console.log(filteredResults)
      setRoster(filteredResults)
    } catch (err) {
      console.error(err)
    }
  }
   const handleSelect = (e) => {
     let searchNat = e.target.value
     fetchEmployeeByLoc(searchNat) 
   }
  return (
    <div>
      <div className='container'>
        <div>
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupSelect01">Options</label>
            <select className="form-select" id="inputGroupSelect01" onChange={handleSelect} >
              <option selected>Sort By Country</option>
              <option value="FR">France</option>
              <option value="GB">Great Britain</option>
              <option value="IE">Ireland</option>
              <option value="NO">Norway</option>
              <option value="NE">Netherlands</option>
              <option value="NZ">New Zealand</option>
              <option value="TU">Turkey</option>
              <option value="US">United States</option>
            </select>
          </div>
        </div>
      </div>
      <EmployeeContext.Provider value={roster}>
        <EmployeeCard />
      </EmployeeContext.Provider>
    </div>
  )
}
export default Search