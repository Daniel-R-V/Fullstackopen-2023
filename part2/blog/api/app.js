const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const config = require("./utils/config")
const blogRouter = require("express").Router()

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model("Blog", blogSchema)

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        console.log("connected to MongoDB")
    })
    .catch((error) => console.error("error connecting to MongoDB:", error.message))

app.use(cors())
app.use(express.json())

blogRouter.get("/", (request, response) => {
    Blog.find({}).then((blogs) => {
        response.json(blogs)
    })
})

blogRouter.post("/", (request, response) => {
    const body = request.body

    const blog = new Blog({
        title: body.title,
        author: body.autor,
        url: body.url,
        likes: body.likes
    })

    blog.save()
        .then((result) => {
            response.status(201).json(result)
        })
        .catch((error) => console.error(error.message))
})

app.use("/api/blogs", blogRouter)

module.exports = app
