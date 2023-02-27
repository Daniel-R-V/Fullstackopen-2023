import React, { useState } from "react"
import ReactDOM from "react-dom"
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
            <p>
                filter shown with <input type="text" value={filterQuery} onChange={(event) => setFilterQuery(event.target.value)} />
            </p>

            <h2>add a new</h2>

            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons
                .filter((person) => person.name.toLowerCase().includes(filterQuery))
                .map((person) => (
                    <div key={person.name}>
                        {person.name} {person.number}
                    </div>
                ))}
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
