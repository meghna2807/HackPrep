// import { useState } from "react";
// import getIdeas from "../services/api";

// function IdeaForm() {
//     const [domain, setDomain] = useState("");
//     const [topN, setTopN] = useState(3);

//     async function handleSubmit() {
//         try{
//             const response = await getIdeas({
//                 domain,
//                 topN
//             });

//             console.log(response.data);
//         }
//         catch(err){
//             console.log(err);
//         }
//     }

//     return (
//         <div>
//             <h2>Generate Ideas</h2>

//             <input type = "text" placeholder="Enter domain" value={domain} onChange={(e) => setDomain(e.target.value)} />

//             <br />
//             <br />

//             <input type="number" placeholder="Top N" value={topN} onChange={(e) => setTopN(e.target.value)} />

//            <p>Domain: {domain}</p>
//            <p>TopN: {topN}</p>

//             <button onClick={handleSubmit}>Generate Ideas</button>
//         </div>
//     );
// }

// export default IdeaForm;

export default function IdeaForm() {
    return (
        <div>
            Form
        </div>
    );
}