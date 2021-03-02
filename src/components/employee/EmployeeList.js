import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeCard } from "./Employee"
import "./Employee.css"

export const EmployeeList = () => {

  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)
  
  const history = useHistory()

  useEffect(() => {
    getLocations()
    .then(getEmployees)

  }, [])



  return (
    <>
      <h2>Employees</h2>
      <div className="employees__page">
        {console.log("EmployeeList: Render", employees)}

        <button onClick={() => {history.push("/employees/create")}}>New Employee</button>

        <div className="employees">
          {
        employees.map(employeeObj => {
          const location = locations.find(location => location.id === employeeObj.locationId)
          
          return <EmployeeCard key={employeeObj.id}
            location ={location}
            employee={employeeObj} />
          })
        }
        </div>
      </div>
    </>
  )
}