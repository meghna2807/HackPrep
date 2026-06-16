const zod = require("zod");

const ideaSchema = zod.object({
    domain: zod.string().min(1,"Domain is required"),
    topN: zod.number().positive("topN must be positive").max(10,"topN cannot exceed 10").optional()
});

module.exports = ideaSchema;

