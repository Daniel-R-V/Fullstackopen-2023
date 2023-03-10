import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import "./index.css"
import axios from "axios"

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [filterQuery, setFilterQuery] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((response) => {
            const { data } = response
            setPersons(data)
        })
    }, [])

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
