const mongoose = require("mongoose")
const Person = require("./models/person")

if (process.argv.length < 3) {
    console.log("Please provide the password as an argument: node mongo.js <password>")
    process.exit(1)
}

const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
})

if (process.argv[3] && process.argv[4]) {
    person.save().then((result) => {
        console.log(`added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close()
    })
} else {
    Person.find({})
        .then(console.log("phonebook:"))
        .then((result) => {
            result.forEach((person) => {
                console.log(`${person.name} ${person.number}`)
            })
            mongoose.connection.close()
        })
}
