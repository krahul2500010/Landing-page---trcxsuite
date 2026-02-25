"use client";

import { motion } from "framer-motion";
import {
    Users,
    Ticket,
    Cpu,
    CheckCircle2,
    ArrowRight
} from "lucide-react";

export function AssignmentEngine() {
    const steps = [
        { icon: <Ticket className="w-8 h-8" />, label: "Ticket Ingest", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: <Users className="w-8 h-8" />, label: "Resource Match", color: "text-indigo-600", bg: "bg-indigo-50" },
        { icon: <Cpu className="w-8 h-8" />, label: "Engine Logic", color: "text-fuchsia-600", bg: "bg-fuchsia-50" },
        { icon: <CheckCircle2 className="w-8 h-8" />, label: "Resolution", color: "text-emerald-600", bg: "bg-emerald-50" },
    ];

    return (
        <section className="py-32 bg-[#fafafa] relative overflow-hidden">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/3 space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-widest">
                            Optimization Flow
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">Intelligent Engine</h2>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed">
                            Our autonomous engine bridges the gap between workforce capacity and ticket demands.
                        </p>
                        <div className="pt-4">
                            <button className="flex items-center gap-2 text-purple-600 font-black text-sm uppercase tracking-wider group">
                                Explore Logic
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-2/3 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-100 via-indigo-100 to-emerald-100 -translate-y-1/2 hidden md:block" />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative z-10 flex flex-col items-center"
                                >
                                    <div className={`w-20 h-20 ${step.bg} rounded-[2rem] flex items-center justify-center ${step.color} shadow-sm border border-white group hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Step 0{index + 1}</div>
                                        <div className="text-sm font-bold text-slate-900">{step.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
