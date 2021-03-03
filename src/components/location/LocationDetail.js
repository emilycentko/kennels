import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>

      <h4>Employees</h4>
      <div className="employee__names">
          {location.employees?.map(employee => employee.name).join(", ")}
      </div>
      
      <h4>Current Residents</h4>
      <div className="animal__names">
          {location.animals?.map(animal => animal.name).join(", ")}
      </div>
    </section>
  )
}