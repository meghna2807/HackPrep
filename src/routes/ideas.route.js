const express = require("express");
const generateDomainIdeas = require("../controllers/ideas.controller");
const router = express.Router();
const validate = require("../middleware/validate.middleware");
const ideaSchema = require("../validators/idea.validator");

router.post("/request",validate(ideaSchema),generateDomainIdeas);

module.exports = router