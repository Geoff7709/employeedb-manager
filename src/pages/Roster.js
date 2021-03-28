import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Roster() {
    useEffect(() => {
        fetchEmployeeRoster()
    }, [])
    const fetchEmployeeRoster = async () => {
        const response = await axios('https://randomuser.me/api/?seed=oidg&results=50').catch(err => console.error(err))
        const results = response.data.results
        results.map((result) => console.log(result.name))
    }
    return (
        <div>
            <h2>Roster</h2>
        </div>
    )
}
export default Roster