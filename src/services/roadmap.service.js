function generateRoadmap(idea){

    const BaseSteps = [
        "Project Setup",
        "Requirement Analysis",
        "Database Design",
        "API Development",
        "Core Business Logic",
        "Testing",
        "Deployment"
    ];

    let extraSteps = [];

    if(idea.complexity === "medium"){
        extraSteps = [
            "Authentication (JWT login/register)",
            "Input validation",
            "Error handling middleware"
        ];
    }

    if(idea.complexity === 'high'){
        extraSteps = [
            "Authentication (JWT login/register)",
            "Input validation & security hardening",
            "Rate limiting",
            "System architecture separation"
        ];
    }
    return {
        title: idea.title,
        techStack: idea.techStack,
        estimatedTime: (idea.complexity === "low"? "2-3 Days": (idea.complexity === "medium"? "4-6 Days": (idea.complexity === "high"? "7-10 Days": "4-6 Days"))) ,
        steps: [...BaseSteps,...extraSteps]
    };
}

module.exports = generateRoadmap