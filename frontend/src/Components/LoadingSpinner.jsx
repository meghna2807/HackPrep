import React from "react";
import { Loader2 } from "lucide-react";

export default function LoadingSpinner(){
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm">
                <Loader2 className="h-7 w-7 animate-spin text-indigo-600" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 animate-pulse">
                Generating Ideas...
            </h3>
            <p className="mt-1 text-sm text-slate-500">
                Constructing optimal roadmaps and calculating utility rankings.
            </p>
        </div>
    );
}