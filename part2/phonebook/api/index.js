require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const Person = require("./models/person")

app.use(express.json())
app.use(cors())
app.use(express.static("build"))

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
        <h1>Phonebook has info for ${Person.length} people</h1>
        <h3>${new Date()}</h3>
    </div>
    `)
})

app.get("/api/persons/:id", (request, response, next) => {
    Person.findById(request.params.id)
        .then((person) => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

app.delete("/api/persons/:id", (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then((result) => {
            response.status(204).end()
        })
        .catch((error) => next(error))
})

app.post("/api/persons", (request, response, next) => {
    const body = request.body

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person
        .save()
        .then((savedPerson) => savedPerson.toJSON())
        .then((savedAndFormattedPerson) => {
            response.json(savedAndFormattedPerson)
        })
        .catch((error) => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === "CastError") {
        return response.status(400).send({ error: "malformatted id" })
    } else if (error.name === "ValidationError") {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
