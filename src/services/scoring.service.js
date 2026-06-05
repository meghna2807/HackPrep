function calculateScore(idea){
    return idea.impact + idea.feasibility - idea.complexity;
}

function addScores(ideas){
    const newIdeas = ideas.map(function(idea){
        const score = calculateScore(idea);
        
        return {...idea,score: score};

    });

    return newIdeas;

}

function rankIdea(ideas){
    return ideas.sort((a,b) => b.score-a.score);
}

module.exports = { calculateScore, addScores, rankIdea }