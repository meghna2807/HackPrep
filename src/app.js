const express = require("express");
const cors = require("cors");
const ideaRoute = require("./routes/ideas.route");

const app = express()
app.use(cors());
app.use(express.json())

app.use("/api/ideas", ideaRoute)

module.exports = app