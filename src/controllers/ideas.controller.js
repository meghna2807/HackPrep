const generateIdeas = require("../services/ideaEngine");

async function generateDomainIdeas(req,res) {
    const { domain,topN } = req.body;

    if(!domain){
        return res.status(400).json({
            message: "No ideas for this domain"
        })
    }
    
    const result = generateIdeas(domain,topN);

    res.status(200).json({
        message: "Ideas generated successfully",
        result: result
    })
}

module.exports = generateDomainIdeas