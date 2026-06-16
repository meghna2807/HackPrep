const { ideas, aliases } = require("../data/ideas");
const scoreCard = require("../services/scoring.service");
const generateRoadmap = require("../services/roadmap.service");
const cacheService = require("./cache.service");



function generateIdeas(domain,topN = 5){

    if(aliases[domain]){
        domain = aliases[domain];
    }

    const cacheKey = `${domain}-${topN}`;

    const cachedData = cacheService.get(cacheKey);

    if(cachedData){
        console.log("Cache Hit");
        return cachedData;
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

    cacheService.set(cacheKey,finalIdeas);

    return finalIdeas;
}

module.exports = generateIdeas