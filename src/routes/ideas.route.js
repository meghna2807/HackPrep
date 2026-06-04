const express = require("express");
const generateDomainIdeas = require("../controllers/ideas.controller");
const router = express.Router();

router.post("/request",generateDomainIdeas);

module.exports = router