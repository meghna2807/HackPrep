import React, { useState } from "react";
import { 
  Sparkles, 
  AlertCircle, 
  Hash, 
  Coins, 
  Activity, 
  GraduationCap, 
  Globe, 
  Leaf, 
  Cpu, 
  Link as LinkIcon, 
  ShoppingBag 
} from "lucide-react";

export default function IdeaForm({ onGenerate, loading, apiError }) {
  const domainsList = [
    { label: "Fintech", val: "fintech", desc: "Finance & UPI Splitters", icon: Coins, color: "from-amber-500 to-orange-500" },
    { label: "Healthcare", val: "healthcare", desc: "Medicine & Wellness Tracker", icon: Activity, color: "from-rose-500 to-pink-500" },
    { label: "EdTech", val: "edtech", desc: "Interactive Flashcard Decks", icon: GraduationCap, color: "from-blue-500 to-indigo-500" },
    { label: "Web Dev", val: "webdev", desc: "Portfolio & Markdown Blog Tool", icon: Globe, color: "from-emerald-500 to-teal-500" },
    { label: "Sustainability", val: "sustainability", desc: "Carbon Footprint Calculator", icon: Leaf, color: "from-green-500 to-emerald-500" },
    { label: "IoT Simulation", val: "iot", desc: "Smart Home & Sensor Feeds", icon: Cpu, color: "from-purple-500 to-violet-500" },
    { label: "Blockchain", val: "blockchain", desc: "Web3 Voting & Token Faucets", icon: LinkIcon, color: "from-cyan-500 to-blue-500" },
    { label: "E-Commerce", val: "ecommerce", desc: "Storefronts & Deal Aggregators", icon: ShoppingBag, color: "from-fuchsia-500 to-pink-500" }
  ];

  const [selectedDomain, setSelectedDomain] = useState("fintech");
  const [topN, setTopN] = useState(3);
  const [localValidationError, setLocalValidationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalValidationError("");

    if (!selectedDomain) {
      setLocalValidationError("Please choose a target domain from the options below.");
      return;
    }

    onGenerate({
      domain: selectedDomain,
      topN: Number(topN),
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-slate-900 font-sans">Configure Generator</h2>
          <p className="text-xs text-slate-500">Pick a direct hackathon sector and choose the output limit.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Select Project Domain
          </label>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {domainsList.map((domain) => {
              const IconComponent = domain.icon;
              const isSelected = selectedDomain === domain.val;
              
              return (
                <button
                  key={domain.val}
                  type="button"
                  onClick={() => {
                    setSelectedDomain(domain.val);
                    setLocalValidationError("");
                  }}
                  className={`group relative flex items-center gap-3.5 rounded-xl border p-3 text-left transition-all duration-200 active:scale-[0.98] ${
                    isSelected
                      ? "border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-100"
                      : "border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-slate-50"
                  }`}
                >

                  {isSelected && (
                    <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-indigo-600" />
                  )}

                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${domain.color} text-white shadow-sm`}>
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {domain.label}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {domain.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>


        <div>
          <label htmlFor="top-n-input" className="block text-sm font-semibold text-slate-700">
            Number of Ideas to Return (topN)
          </label>
          <div className="relative mt-2 rounded-xl shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <Hash className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="number"
              id="top-n-input"
              min="1"
              max="20"
              value={topN}
              onChange={(e) => {
                const val = e.target.value === "" ? "" : Number(e.target.value);
                setTopN(val);
              }}
              placeholder="e.g. 3"
              className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <span className="mt-1 block text-xs text-slate-400">Specify an amount between 1 and 20.</span>
        </div>


        {localValidationError && (
          <div className="flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-sm text-rose-700 text-left">
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-500" />
            <span>{localValidationError}</span>
          </div>
        )}

        {apiError && !localValidationError && (
          <div className="flex items-center gap-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-700 text-left">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-500" />
            <span>{apiError}</span>
          </div>
        )}


        <button
          type="submit"
          disabled={loading}
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 active:scale-[0.98] ${
            loading
              ? "bg-slate-300 shadow-none cursor-not-allowed"
              : "bg-indigo-600 shadow-indigo-100 hover:bg-indigo-700 hover:shadow-indigo-200"
          }`}
        >
          {loading ? "Generating Ideas..." : "Generate Ideas"}
        </button>
      </form>
    </div>
  );
}