import React from "react"

const Persons = ({ persons, filterQuery }) => {
    return persons
        .filter((person) => person.name.toLowerCase().includes(filterQuery))
        .map((person) => (
            <div key={person.name}>
                {person.name} {person.number}
            </div>
        ))
}

export default Persons
