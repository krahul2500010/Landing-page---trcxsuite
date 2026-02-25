"use client";

import { motion } from "framer-motion";
import {
    Zap,
    ArrowUpRight,
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

export function CapabilitiesGrid() {
    const capabilities = [
        {
            title: "Workforce Visibility",
            desc: "Neural tracking of team distribution and skill matrix.",
            visual: <NodeMapVisual />,
            className: "md:col-span-2 md:row-span-2"
        },
        {
            title: "Capacity Hub",
            desc: "Predictive resource allocation.",
            visual: <MiniBarChart />,
            className: "md:col-span-2 md:row-span-1"
        },
        {
            title: "SLA Governance",
            desc: "Zero-fail policy enforcement.",
            visual: <StatusPulseVisual />,
            className: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Smart Ticket Routing",
            desc: "Neural match engine.",
            icon: <Zap className="w-5 h-5" />,
            className: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Analytics Engine",
            desc: "Real-time decision intelligence.",
            visual: <RealTimeGraph />,
            className: "md:col-span-2 md:row-span-1"
        },
    ];

    return (
        <section className="py-24 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="space-y-4 text-left">
                        <div className="text-purple-600 text-[10px] font-black uppercase tracking-[0.4em]">The Platform Core</div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Advanced Intelligence</h2>
                    </div>
                    <p className="text-slate-500 max-w-sm font-medium text-sm leading-relaxed">
                        A unified architecture designed to scale complex enterprise support operations through autonomous decision making.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group glass-frosted p-8 rounded-[2rem] hover:bg-white transition-all duration-500 overflow-hidden relative border border-purple-50",
                                item.className
                            )}
                        >
                            <div className="relative z-20 flex flex-col h-full justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors tracking-tight">{item.title}</h3>
                                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-purple-500 transition-colors" />
                                    </div>
                                    <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-[200px]">{item.desc}</p>
                                </div>

                                {item.visual && (
                                    <div className="mt-4 flex-grow flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                                        {item.visual}
                                    </div>
                                )}

                                {item.icon && (
                                    <div className="mt-auto p-3 rounded-xl bg-purple-50 w-fit group-hover:bg-purple-600 group-hover:text-white transition-all text-purple-600">
                                        {item.icon}
                                    </div>
                                )}
                            </div>

                            {/* Card Decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MiniBarChart() {
    return (
        <div className="flex items-end gap-1.5 h-16">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className="w-2 bg-purple-200 rounded-full overflow-hidden relative"
                >
                    <motion.div
                        animate={{ top: ['100%', '0%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="absolute inset-x-0 h-1/2 bg-purple-500/20 blur-[2px]"
                    />
                </motion.div>
            ))}
        </div>
    );
}

function NodeMapVisual() {
    return (
        <div className="relative w-full h-32 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-purple-200 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(124,58,237,0.3)]" />
            </div>
            <div className="absolute top-4 left-1/4 w-3 h-3 rounded-full bg-purple-100" />
            <div className="absolute bottom-6 right-1/4 w-3 h-3 rounded-full bg-purple-100" />
            <div className="absolute top-1/2 right-12 w-2 h-2 rounded-full bg-purple-200" />
        </div>
    );
}

function StatusPulseVisual() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <div className="w-12 h-12 rounded-full border border-emerald-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="absolute inset-0 rounded-full border border-emerald-500 animate-ping opacity-20" />
            </div>
            <div className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Verified System</div>
        </div>
    );
}

function RealTimeGraph() {
    return (
        <div className="w-full px-4">
            <svg className="w-full h-12" viewBox="0 0 200 40">
                <motion.path
                    d="M 0 35 Q 20 10 40 30 T 80 20 T 120 35 T 160 15 T 200 25"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </svg>
        </div>
    );
}
