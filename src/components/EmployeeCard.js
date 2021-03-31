import React, { useContext } from 'react'
import EmployeeContext from '../utils/EmployeeContext'
import styled from 'styled-components'

const Card = styled.div`
    box-shadow: -10px 10px 10px grey;
    border: 2px solid blue;
    padding: 5px;
    background-image: linear-gradient(to bottom left, white, grey);
    margin: 5px;
`
const Image = styled.img`
    border: 1px solid black;
    border-radius: 3px;
`

function EmployeeCard() {
    const roster = useContext(EmployeeContext)

    return (
        <div>
            {
                roster.map(employee => {
                    return (<div className='col-md-4' key={employee.login.uuid}>
                        <Card className="card mb-3">
                            <div >
                                <Image src={employee.picture.large} alt={`${employee.name.first} ${employee.name.last}`} />
                                <div >
                                    <div className="card-body">
                                        <h5 className="card-title">{`${employee.name.first} ${employee.name.last}`}</h5>
                                        <p className="card-text">Login: {employee.login.username}</p>
                                        <p className="card-text">Location: {employee.location.country}</p>
                                        <p className="card-text">Email: {employee.email}</p>
                                    </div>
                                </div>
                            </div>
                        </Card >
                    </div>)
                })
            }
        </div>)
}

export default EmployeeCard