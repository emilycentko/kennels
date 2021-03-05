import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  // const { locations, getLocations } = useContext(LocationContext)
  // const { customers, getCustomers } = useContext(CustomerContext)

  // The useHistory hook lets us tell React which route we want to visit.
  // We will use it to tell React to render the animal form component.

   // Since you are no longer ALWAYS displaying all of the animals
  const [ filteredAnimals, setFiltered ] = useState([])
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    // getLocations()
    //     .then(getCustomers)
    //     .then(getAnimals)
    getAnimals()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])


  return (
    <>
      <h2>Animals</h2>
      <div className="animal__page">
        {console.log("AnimalList: Render", animals)}

		      <button onClick={() => {history.push("/animals/create")}}>Add Animal</button>
          {/* <div className="animals">
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
        </div> */}
        <div className="animals">
        {
        filteredAnimals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
        }
        </div>
      </div>
    </>
  )
}
