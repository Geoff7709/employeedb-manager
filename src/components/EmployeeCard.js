import React, { useContext } from 'react'
import EmployeeContext from '../utils/EmployeeContext'


function EmployeeCard() {
    const roster = useContext(EmployeeContext)
    
    return (
        
        <div>
        {
            roster.map(employee => <div className="card mb-3" key={employee.login.uuid}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={employee.picture.large} alt={`${employee.name.first} ${employee.name.last}`} />
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{`${employee.name.first} ${employee.name.last}`}</h5>
                            <p className="card-text">Login: {employee.login.username}</p>
                            <p className="card-text">Location: {employee.location.country}</p>
                            <p className="card-text">Email: {employee.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >)
        }
        </div>
        
    )
}

export default EmployeeCard