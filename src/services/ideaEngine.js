const ideas = require("../data/ideas");


function generateIdeas(domain){
    const aliases = {
    finance: "fintech",
    banking: "fintech",
    health: "healthcare",
    medical: "healthcare"
    };

    if(aliases[domain]){
        domain = aliases[domain];
    }


    return ideas[domain] || [];
}

module.exports = generateIdeas