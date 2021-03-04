import React, { useContext, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"

export const LocationForm = () => {
    const { addLocation, getLocationById, updateLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({
        name: "",
        address: "",
    });

    const [isLoading, setIsLoading] = useState(true);

    const { animalId } = useParams();
	  const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        let selectedVal = event.target.value

        newLocation[event.target.id] = selectedVal
       
        setLocation(newLocation)
      }

    const handleClickSaveLocation = (event) => {
        event.preventDefault() 

        if (location.name === "" || location.address === "") {
            window.alert("Please enter a location")
          } else {
  
          addLocation(location)
          .then(() => history.push("/locations"))
        }
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="New location name" value={location.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required className="form-control" placeholder="New location address" value={location.address}/>
                </div>
            </fieldset>

            <button className="btn btn-primary"
              onClick={handleClickSaveLocation}>
              Save New Location
            </button>
        </form>
    )
}
    