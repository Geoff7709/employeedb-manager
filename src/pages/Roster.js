import React, { useContext } from 'react'
import EmployeeCard from '../components/EmployeeCard'
import styled from 'styled-components'


// const Grid = styled.div`
// display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 10px;`

function Roster() {

    return (
        <div className='container'>
            <div className='row'>
                <EmployeeCard />
            </div>
        </div>
    )
}
export default Roster