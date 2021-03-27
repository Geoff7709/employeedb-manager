import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Roster() {
    useEffect(() => {
        fetchEmployeeRoster()
    }, [])
    const fetchEmployeeRoster = async () => {
        const response = await axios('https://randomuser.me/api/?results=50')
        console.log(response.data.results)
    }
    return (
        <div>
            <h2>Roster</h2>
        </div>
    )
}
export default Roster