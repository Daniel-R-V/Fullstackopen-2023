import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"

const App = () => {
    const [persons, setPersons] = useState(["Arto Hellas"])
    const [newName, setNewName] = useState("")
    const numbers = persons.map((p) => <div key={p}>{p}</div>)

    const addNumber = (event) => {
        event.preventDefault()
        setPersons(persons.concat(newName))
        setNewName("")
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNumber}>
                <div>
                    name: <input onChange={(event) => setNewName(event.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>{numbers}</div>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
