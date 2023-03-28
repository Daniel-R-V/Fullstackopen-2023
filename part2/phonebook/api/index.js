require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const Person = require("./models/person")

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" })
}

app.use(cors())
app.use(express.json())
morgan.token("body", (request, response) => (request.method === "POST" ? JSON.stringify(request.body) : ""))

app.use(morgan((tokens, request, response) => [tokens.method(request, response), tokens.url(request, response), tokens.status(request, response), tokens.res(request, response, "content-length"), "-", tokens["response-time"](request, response), "ms", tokens.body(request, response)].join(" ")))

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
    Person.find({}).then((people) => {
        response.json(people)
    })
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
    Person.findById(request.params.id).then((person) => {
        response.json(person)
    })
})

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter((person) => person.id !== id)

    response.status(204).end()
})

app.post("/api/persons", (request, response) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({ error: "name missing" })
    } else if (body.number === undefined) {
        return response.status(400).json({ error: "number missing" })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then((savedPerson) => {
        response.json(savedPerson)
    })
})

app.use(unknownEndpoint)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
