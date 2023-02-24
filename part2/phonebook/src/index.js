import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"

const App = () => {
    const [persons, setPersons] = useState(["Arto Hellas 040-1234567"])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const infoPersons = persons.map((person) => <div key={person}>{person}</div>)

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = `${newName} ${newNumber}`
        if (persons.includes(newPerson)) {
            setNewName("")
            setNewNumber("")
            return alert(`${newName} is already added to phonebook`)
        }
        setPersons(persons.concat(newPerson))
        setNewName("")
        setNewNumber("")
    }

    return (
        <div>
            <h2>Phonebook</h2>
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
            <div>{infoPersons}</div>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
