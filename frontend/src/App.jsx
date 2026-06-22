import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import IdeaForm from "./Components/IdeaForm";
import IdeaCard from "./Components/IdeaCard";
import LoadingSpinner from  "./Components/LoadingSpinner";
import EmptyState from "./Components/EmptyState";
import Footer from "./Components/Footer";

import { getIdeas } from "./services/api.js";

import { Sparkles,CheckCircle, Lightbulb} from "lucide-react";

export default function App() {
    const[ ideas, setIdeas] = useState([]);
    const[ loading, setLoading] = useState(false);
    const[ error, setError] = useState("");
    const[ activeDomain, setActiveDomain] = useState("");

    const handleGenerateIdeas = async(payload) => {
        setIdeas([]);
        setError("");
        setLoading(true);
        setActiveDomain(payload.domain);

        try{
            const response = await getIdeas({
                domain: payload.domain,
                topN: Number(payload.topN),
            });

            if(response && response.data && Array.isArray(response.data.result)){
                setIdeas(response.data.result);
            }
            else{
                setError("Invalid response");
            }
        } catch(err){
            console.log(err);

            if(err.response && err.response.status === 400){
                setError("Invalid input. Please check your values");
            }
            else{
                setError("Server unavailable. Please try again.")
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-slate-50 font-sans antialiased text-slate-900">
            <Navbar />

            <main className="flex-1 pb-20">
                <Hero />

                <div id="idea-generator-form-section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">

                        <div className="lg:col-span-5">
                            <div className="sticky top-24">
                                <IdeaForm 
                                  onGenerate={handleGenerateIdeas}
                                  loading={loading}
                                  apiError={error}
                                />  
                            </div>
                        </div>

                        <div className = "lg:col-span-7">

                            <div className="rounded-3xl bg-slate-100/50 p-4 ring-1 ring-slate-200/50 sm:p-6 lg:p-8">

                               <div className="mb-6 flex items-center justify-between border-b border-slate-200/60 pb-4">
                               <div>
                                <h2 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse" />
                                    Generated Hackathon Output
                                </h2>
                                {activeDomain && (
                                  <p className="text-xs text-slate-500 mt-0.5">
                                    Displaying sorted list of rankings for sector: <strong className="text-indigo-600 font-semibold">{activeDomain}</strong>
                                  </p>
                                )}

                               </div>

                               {ideas.length>0 && !loading && (
                                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                                    Found {ideas.length} proposal{ideas.length > 1 ? "s" : ""}
                                </span>
                               )}
                            </div>

                            {loading ? (
                                <div className="rounded-2xl bg-white p-8 shadow-sm">
                                    <LoadingSpinner />
                                </div>
                            ) : error ? (
                                <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 mb-3">
                                            <Lightbulb className="h-6 w-6 text-rose-500" />
                                        </div>
                                        <h3 className="font-display text-base font-bold text-slate-900">
                                            Could not fetch layout
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-500 max-w-sm">
                                            {error}
                                        </p>
                                    </div>
                                </div>
                            ) : ideas.length > 0 ? (
                                <div className="space-y-6">
                                    {ideas.map((idea,idx) => (
                                        <IdeaCard key={idx}
                                        idea={idea}
                                        rank={idx+1}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <EmptyState />
                            )}

                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>

    );
}