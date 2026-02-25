"use client";

import { motion } from "framer-motion";

export function ProductScreens() {
    const screens = [
        { name: "RMS Crew Analytics", color: "bg-blue-100" },
        { name: "RMS Organogram", color: "bg-slate-100" },
        { name: "TMS Ticket Queue", color: "bg-purple-100" },
        { name: "TMS Manager Dashboard", color: "bg-emerald-100" },
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-extrabold text-slate-900 font-display">Experience the Platform</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto font-medium">
                        Seamlessly switch between workforce intelligence and ticket resolution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {screens.map((screen, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="group relative rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
                        >
                            <div className="aspect-[16/10] p-6">
                                <div className={`w-full h-full rounded-2xl ${screen.color} border border-slate-100 relative overflow-hidden`}>
                                    {/* Simplified mock UI skeleton */}
                                    <div className="p-4 space-y-3">
                                        <div className="w-1/3 h-4 bg-white/50 rounded" />
                                        <div className="w-full h-24 bg-white/50 rounded-xl" />
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="h-20 bg-white/50 rounded-xl" />
                                            <div className="h-20 bg-white/50 rounded-xl" />
                                            <div className="h-20 bg-white/50 rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white via-white to-transparent pt-20">
                                <div className="text-xl font-bold text-slate-900">{screen.name}</div>
                                <div className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-wider">Interface Preview</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
