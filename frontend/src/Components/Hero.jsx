import React from 'react';
import { Sparkles, ArrowRight, Zap, Target, Bookmark } from "lucide-react";

export default function Hero(){
    const handleScrollToForm = () => {
        const fromSection = document.getElementsById("idea-generator-form-section");
        if(fromSection){
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24">
            <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-[100px]" />
            <div className="absolute top-32 right-10 -z-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/10 mb-6 animate-pulse">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                    The Ultimate Hackathon Brainstorming Engine
                </div>

                <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                    Generate <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">Winning</span>
                    <br />
                    Hackathon Ideas
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg relative text-slate-600 sm:text-xl">
                    Discover innovative project ideas, calculate logical impact scores, and obtain fully structured implementation roadmaps tailored to your preferred domain.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <button onClick={handleScrollToForm} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:scale-[1.02] hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.98]">
                        Get Started
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                <div id="features" className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-3">
                            <Zap className="h-5 w-5" />
                        </div>
                        <h3 className="text-sm font-semibold text-slate-900">AI-Inspired Scoring</h3>
                        <p className="mt-1 text-xs text-slate-500 text-center">
                            Evaluates feasibility, complexity, and user impact instantly.
                        </p>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-3">
                            <Target className="h-5 w-5" />
                        </div>
                        <h3 className="text-sm font-semibold text-slate-900">Mapped Alias Routing</h3>
                        <p className="mt-1 text-xs text-slate-500 text-center">
                            Substitutes simple queries into high-value technology industries.
                        </p>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-3">
                            <Bookmark className="h-5 w-5" />
                        </div>
                        <h3 className="text-sm font-semibold text-slate-900">Complete Roadmaps</h3>
                        <p className="mt-1 text-xs text-slate-500 text-center">
                            Clear milestone tasks to go from zero-configuration to deployment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}