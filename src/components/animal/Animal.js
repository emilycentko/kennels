import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, owner, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="location__address">Location: {location.name}</div>
        <div className="animal__owner">Owner: {owner.name}</div>
    </section>
)
