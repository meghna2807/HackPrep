import React from "react";
import { Terminal } from "lucide-react";

export default function Navbar(){
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/85 shadow-sm backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white shadow-md shadow-indigo-100">
                        <Terminal className="h-5 w-5" />
                    </div>
                    <span className="font-display text-xl font-bold tracking-tight text-gray-900">
                        Hack<span className="text-indigo-600">Prep</span>
                    </span>
                </div>

                <nav className="flex items-center gap-6">
                    <a href="#" className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600">
                        Home
                    </a>
                    <a href="#features" className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600">
                        Features
                    </a>
                    <a href="#about" className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600">
                        About
                    </a>
                </nav>
            </div>
        </header>
    );
}