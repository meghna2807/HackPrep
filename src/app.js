const express = require("express");
const ideaRoute = require("./routes/ideas.route");

const app = express()
app.use(express.json())

app.use("/api/ideas", ideaRoute)

module.exports = app