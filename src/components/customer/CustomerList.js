import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {

  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    getCustomers()

  }, [])


  return (
    <>
      <h2>Customers</h2>
      <div className="customers">
      {console.log("CustomerList: Render", customers)}
        {
          customers.map(customerObj => {
            return <CustomerCard key={customerObj.id} customer={customerObj} />
          })
        }
      </div>
    </>
  )
}
