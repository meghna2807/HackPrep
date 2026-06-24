import React, { useState } from "react";
import { Zap, Clock, Code, ChevronRight, CheckCircle2, ChevronDown, Award } from "lucide-react";


export default function IdeaCard({ idea, rank }) {
 
  const [isOpen, setIsOpen] = useState(true);

  // Safely extract values from the idea object
  const { title, score, complexity, description, roadmap } = idea;
  const estimatedTime = roadmap?.estimatedTime || "N/A";
  const steps = roadmap?.steps || [];


  const getComplexityBadgeStyles = (val) => {
    switch (val?.toLowerCase()) {
      case "low":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/50";
      case "high":
        return "bg-rose-50 text-rose-700 border-rose-200/50";
      case "medium":
      default:
        return "bg-amber-50 text-amber-700 border-amber-200/50";
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-50/50">
      
  
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-400" />

  
      <div className="p-6">
        
  
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                #{rank}
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {title}
              </h3>
            </div>
            
        
            {description && (
              <p className="text-sm text-slate-500 leading-relaxed mt-1">
                {description}
              </p>
            )}
          </div>

         
          <div className="flex shrink-0 items-center gap-1.5 self-start rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-indigo-100">
            <Award className="h-3.5 w-3.5" />
            <span>Score: {score}</span>
          </div>
        </div>

   
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-50 pt-4">
          
  
          <div className={`rounded-lg border px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${getComplexityBadgeStyles(complexity)}`}>
            Complexity: <span className="font-bold">{complexity}</span>
          </div>

 
          <div className="inline-flex items-center gap-1 rounded-lg border border-slate-100 bg-slate-50/50 px-2.5 py-1 text-xs font-medium text-slate-600">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            Estimated: {estimatedTime}
          </div>
        </div>

   
        {steps.length > 0 && (
          <div className="mt-5 border-t border-slate-100 pt-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-indigo-600"
            >
              <span className="flex items-center gap-1.5">
                <Code className="h-4 w-4 text-indigo-500" />
                Implementation Roadmap
              </span>
              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-indigo-500" : ""
                }`}
              />
            </button>

   
            {isOpen && (
              <div className="mt-4 space-y-4">
                <div className="relative pl-6">
        
                  <div className="absolute top-1.5 bottom-1.5 left-[11px] w-0.5 bg-indigo-50" />

                  {steps.map((step, idx) => (
                    <div key={idx} className="relative mb-4 last:mb-0">
                      
     
                      <span className="absolute -left-[21px] top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white ring-2 ring-indigo-50 text-indigo-500 transition-transform group-hover:scale-110">
                        <CheckCircle2 className="h-3 w-3 text-indigo-600" />
                      </span>
                      
          
                      <span className="text-sm font-medium text-slate-700 block">
                        <span className="text-slate-400 text-xs font-semibold mr-1.5">
                          Step {idx + 1}:
                        </span>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
