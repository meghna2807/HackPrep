const ideas = require("../data/ideas");

function generateIdeas(domain){
    return ideas[domain] || [];
}

module.exports = generateIdeas