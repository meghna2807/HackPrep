# HackPrep

HackPrep is a full-stack MERN application that helps students generate hackathon project ideas based on a selected domain. The application ranks ideas using a rule-based scoring algorithm and provides an implementation roadmap for each idea.

---

## Features

- Generate hackathon project ideas based on domain
- Rule-based scoring engine
- Automatic ranking of ideas
- Implementation roadmap generation
- Input validation using Zod
- In-memory caching for faster repeated requests
- RESTful API architecture

---

## Tech Stack

- React.js
- Vite
- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Zod
- Axios
- Git
- GitHub
- Postman

---

## Project Structure

```text
HackPrep
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── validators/
│   ├── data/
│   ├── db/
│   ├── app.js
│   └── server.js
│
├── package.json
└── README.md
```

---

## How It Works

1. The user selects a domain and specifies the number of ideas to generate.
2. React sends a POST request to the backend using Axios.
3. Express receives the request.
4. Zod validates the request body.
5. The controller invokes the Idea Engine.
6. The Idea Engine:
   - Maps aliases to supported domains.
   - Checks the cache for existing results.
   - Loads predefined project ideas.
   - Calculates scores.
   - Ranks ideas.
   - Generates an implementation roadmap.
   - Returns the top N ideas.
7. The frontend displays the generated ideas and roadmaps.

---

## Scoring Formula

```
Score = Impact + Feasibility − Complexity
```

Each project idea is evaluated based on:

- Impact
- Feasibility
- Complexity

The highest-scoring ideas are returned first.

---

## Cache

HackPrep uses an in-memory cache implemented using JavaScript's `Map` object.
Repeated requests with the same input return cached results instead of recalculating them.

---

## Validation

Input validation is implemented using Zod.

Rules:

- Domain is required.
- Domain must be a string.
- `topN` is optional.
- `topN` must be a positive number.
- Maximum value of `topN` is 10.

## Running Locally

### Clone the Repository

```bash
git clone https://github.com/meghna2807/HackPrep.git
cd HackPrep
```

### Backend

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

or

```bash
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root.

## Author

**Meghna Chauhan**


GitHub: https://github.com/meghna2807
