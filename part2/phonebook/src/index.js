import React, { useState } from "react"
import ReactDOM from "react-dom"
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import "./index.css"

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Peter Pan", number: "12-43-123456" }
    ])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [filterQuery, setFilterQuery] = useState("")

    const addPerson = (e) => {
        e.preventDefault()

        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const newPerson = { name: newName, number: newNumber }

            setPersons(persons.concat(newPerson))

            setNewName("")
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter filterQuery={filterQuery} setFilterQuery={setFilterQuery} />

            <h2>add a new</h2>

            <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} addPerson={addPerson} />

            <h2>Numbers</h2>
            <Persons persons={persons} filterQuery={filterQuery} />
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
