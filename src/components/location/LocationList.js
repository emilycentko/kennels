import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Location.css"

export const LocationList = () => {

  const { locations, getLocations } = useContext(LocationContext)

  const history = useHistory()

  useEffect(() => {
    getLocations()

  }, [])


  return (
    <>
      <h2>Locations</h2>
      <div className="locations__page">
        {console.log("LocationList: Render", locations)}

        <button onClick={() => {history.push("/locations/create")}}>New Location</button>
        <div className="locations">
        {
          locations.map(locationObj => {
            return <LocationCard key={locationObj.id} location={locationObj} />
          })
        }
        </div>
      </div>
    </>
  )
}