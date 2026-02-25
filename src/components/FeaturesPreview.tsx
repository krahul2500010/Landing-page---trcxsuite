"use client";

import { motion } from "framer-motion";
import { Users, Ticket, Brain, Zap, Target, Gauge } from "lucide-react";

export function FeaturesPreview() {
    return (
        <section id="product" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-extrabold text-slate-900">A Complete Support Operations Platform</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                        Bridging the gap between resource allocation and service resolution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* RMS Block */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-blue-500/20">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">RMS — Resource Intelligence</h3>
                        <p className="text-slate-500 mb-8 font-medium">Workforce, skills, capacity, and organizational intelligence.</p>

                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                "Organizational structure visibility",
                                "Skill & role mapping",
                                "Capacity & availability tracking",
                                "Bench & workload analytics",
                                "Workforce performance insights"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <CheckCircleSmall />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* TMS Block */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/50 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-white mb-6 group-hover:-rotate-6 transition-transform shadow-lg shadow-purple-500/20">
                            <Ticket className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">TMS — Ticket Intelligence</h3>
                        <p className="text-slate-500 mb-8 font-medium">Customer support ticket lifecycle and resolution management.</p>

                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                "End-to-end ticket lifecycle",
                                "SLA & escalation workflows",
                                "Agent assignment optimization",
                                "Customer support portal",
                                "Resolution analytics"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                        <CheckCircleSmall />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function CheckCircleSmall() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
