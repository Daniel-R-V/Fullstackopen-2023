const express = require("express")
const app = express()

app.use(express.json())
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" })
}

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]

app.get("/", (request, response) => {
    response.send("<h1>Hello to your API DANI!</h1>")
})

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/api/info", (request, response) => {
    response.send(`
    <div>
        <h1>Phonebook has info for ${persons.length} people</h1>
        <h3>${new Date()}</h3>
    </div>
    `)
})

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find((person) => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter((person) => person.id !== id)

    response.status(204).end()
})

app.post("/api/persons", (request, response) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 100)
    }

    if (!body.name) {
        return response.status(400).json({
            error: "Name missing"
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: "Number missing"
        })
    } else if (persons.map((person) => person.name).includes(body.name)) {
        return response.status(400).json({
            error: "Name already exists"
        })
    }

    persons = persons.concat(person)

    response.json(person)
})

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
