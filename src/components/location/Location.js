import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import "./Location.css"


export const LocationCard = ( { location } ) => {

    const locationId = location.id

    const { getLocationById } = useContext(LocationContext)

    const [selectedLocation, setSelectedLocation] = useState({})

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then((response) => {
          setSelectedLocation(response)
        })
    }, [])

    return (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>
                {location.name }
            </Link>
        </h3>
        <div className="location__number_employees">{selectedLocation.employees?.length} employees</div>
        <div className="location__number_animals">{selectedLocation.animals?.length} animals</div>
    </section>
    )

}
