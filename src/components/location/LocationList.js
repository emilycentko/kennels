import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Location.css"

export const LocationList = () => {

  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getLocations()

  }, [])


  return (
    <>
      <h2>Locations</h2>
      <div className="locations">
        {console.log("LocationList: Render", locations)}
        {
          locations.map(locationObj => {
            return <LocationCard key={locationObj.id} location={locationObj} />
          })
        }
      </div>
    </>
  )
}