import React from "react";
import { Lightbulb } from "lucide-react";

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-100 bg-white/50 px-6 py-20 text-center shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 mb-4 shadow-sm">
                <Lightbulb className="h-7 w-7 text-indigo-400/80" />
            </div>

            <h3 className="font-display text-lg font-bold text-slate-900">
                No Ideas Generated Yet
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
                Enter a domain like <strong className="text-indigo-600">finance</strong>, <strong className="text-indigo-600">health</strong>, or <strong className="text-indigo-600">education</strong> above to automatically construct custom hackathon layouts.
            </p>
        </div>
    );
}