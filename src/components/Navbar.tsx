"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
                scrolled ? "glass-frosted py-3 border-b border-purple-50 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                        <span className="text-white font-black text-xl">T</span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-slate-900">TRCX-SUITE</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["Product", "Solutions", "Pricing", "Security"].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-bold text-slate-600 hover:text-purple-600 px-4 py-2 transition-colors">
                        Login
                    </button>
                    <button className="shimmer-mask bg-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-100">
                        Start Trial
                    </button>
                </div>
            </div>
        </nav>
    );
}
