import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
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

  // The useHistory hook lets us tell React which route we want to visit.
  // We will use it to tell React to render the animal form component.

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
        .then(getCustomers)
        .then(getAnimals)

  }, [])


  return (
    <>
      <h2>Animals</h2>
      <div className="animal__page">
        {console.log("AnimalList: Render", animals)}

		      <button onClick={() => {history.push("/animals/create")}}>Add Animal</button>
          <div className="animals">
            {
            animals.map(animalObj => {
              const owner = customers.find(customer => customer.id === animalObj.customerId)
              const clinic = locations.find(location => location.id === animalObj.locationId)

              return <AnimalCard key={animalObj.id}
                location={clinic}
                owner={owner}
                animal={animalObj} />
              })
            }
        </div>
      </div>
    </>
  )
}
