import React from "react";
import { Database, Server, Heart} from "lucide-react";

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (
    <footer id="about" className="border-t border-slate-100 bg-slate-50/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left">
                <div className="flex flex-col gap-1 items-center sm:items-start">
                    <span className="font-display text-sm font-bold tracking-tight text-slate-900">
                        Hack<span className="text-indigo-600">Prep</span>
                    </span>
                    <p className="text-xs text-slate-500">
                        The ultimate student workbench for prototyping ideas in real-time.
                    </p>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                        Built with <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> React, Express and MongoDB
                    </span>
                    <span className="text-xs text-slate-400">
                         &copy; {currentYear} HackPrep. All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    </footer>
    );
}