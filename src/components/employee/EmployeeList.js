import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./Employee"
import "./Employee.css"

export const EmployeeList = () => {

  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()

  }, [])


  return (
    <div className="employees">
      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employeeObj => {
          return <EmployeeCard key={employeeObj.id} employee={employeeObj} />
        })
      }
    </div>
  )
}