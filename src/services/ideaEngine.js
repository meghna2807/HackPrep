const ideas = require("../data/ideas");
const scoreCard = require("../services/scoring.service");


function generateIdeas(domain,topN = 5){
    const aliases = {
    finance: "fintech",
    banking: "fintech",
    health: "healthcare",
    medical: "healthcare"
    };

    if(aliases[domain]){
        domain = aliases[domain];
    }

    const domainIdeas = ideas[domain] || [];

    const scoredIdea = scoreCard.addScores(domainIdeas);
    const rankedIdea = scoreCard.rankIdea(scoredIdea);

    let { topN } = req.body;

    if(!topN || topN <= 0 || isNaN(topN)){
        topN = 5;
    }

    

    return rankedIdea.slice(0,topN);
}

module.exports = generateIdeas