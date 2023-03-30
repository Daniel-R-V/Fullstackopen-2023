const peopleRouter = require("express").Router()
const Person = require("../models/person")

peopleRouter.get("/", (request, response) => {
    Person.find({}).then((people) => {
        response.json(people)
    })
})

peopleRouter.get("/:id", (request, response, next) => {
    Person.findById(request.params.id)
        .then((note) => {
            if (note) {
                response.json(note)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

peopleRouter.post("/", (request, response, next) => {
    const body = request.body

    const note = new Person({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    note.save()
        .then((savedNote) => {
            response.json(savedNote)
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

    const note = {
        content: body.content,
        important: body.important
    }

    Person.findByIdAndUpdate(request.params.id, note, { new: true })
        .then((updatedNote) => {
            response.json(updatedNote)
        })
        .catch((error) => next(error))
})

module.exports = peopleRouter
