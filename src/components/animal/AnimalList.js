import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
        .then(getCustomers)
        .then(getAnimals)

  }, [])


  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animalObj => {
          const owner = customers.find(customer => customer.id === animalObj.customerId)
          const clinic = locations.find(location => location.id === animalObj.locationId)

          return <AnimalCard key={animalObj.id}
          location={clinic}
          customer={owner}
          animal={animalObj} />
        })
      }
    </div>
  )
}
