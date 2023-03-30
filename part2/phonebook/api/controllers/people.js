const peopleRouter = require("express").Router()
const Person = require("../models/person")

peopleRouter.get("/", (request, response) => {
    Person.find({}).then((person) => {
        response.json(person)
    })
})

peopleRouter.get("/:id", (request, response, next) => {
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

peopleRouter.post("/", (request, response, next) => {
    const body = request.body

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person
        .save()
        .then((savedPerson) => {
            response.json(savedPerson)
        })
        .catch((error) => next(error))
})

peopleRouter.delete("/:id", (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch((error) => next(error))
})

peopleRouter.put("/:id", (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then((updatedNote) => {
            response.json(updatedNote)
        })
        .catch((error) => next(error))
})

module.exports = peopleRouter
