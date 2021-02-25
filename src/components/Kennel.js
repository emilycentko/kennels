import React from "react"
import { AnimalCard } from "./animal/Animal"
import { EmployeeCard } from "./employee/Employee"
import { CustomerCard } from "./customer/Customer"
import { LocationCard } from "./location/Location"
import { PropsAndState } from "./PropsAndState"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
        
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName="Emily" />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
    </>
)

// return (
//     <>
//         <h2 className="App-logo">{kennel.name}</h2>
//         <small>Loving care when you're not there.</small>
//         <address className="Test">
//             <div>Visit Us at the {kennel.location[0].title}</div>
//             <div>{kennel.location[0].address}</div>
//         </address>
//         <article className="animals">
//             {
//             animals.map(animal => <h5>(animal.name)</h5>)
//             })
//         </article>
//     </>
// )
// }

