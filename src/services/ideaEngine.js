const ideas = require("../data/ideas");
const scoreCard = require("../services/scoring.service");
const generateRoadmap = require("../services/roadmap.service");


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

    const validTopN = !topN || topN<=0 || isNaN(topN)? 5: Number(topN);
    const topIdeas = rankedIdea.slice(0,validTopN);

    const finalIdeas = topIdeas.map(idea => {
        return{
            ...idea,
            roadmap: generateRoadmap(idea)
        };
    });

    return finalIdeas;
}

module.exports = generateIdeas