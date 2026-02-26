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
            desc: "Neural tracking of global team distribution and skill matrix analysis for optimal resource utilization.",
            visual: <NodeMapVisual />,
            className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-50/50 to-white"
        },
        {
            title: "Capacity Hub",
            desc: "Predictive resource allocation using real-time historical data.",
            visual: <MiniBarChart />,
            className: "md:col-span-2 md:row-span-1"
        },
        {
            title: "SLA Governance",
            desc: "Zero-fail policy enforcement with automated alerts.",
            visual: <StatusPulseVisual />,
            className: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Neural Routing",
            desc: "Match engine for intent-based assignment.",
            icon: <Zap className="w-5 h-5" />,
            className: "md:col-span-1 md:row-span-1 group/routing hover:bg-slate-900 transition-colors duration-500"
        },
        {
            title: "Analytics Engine",
            desc: "Real-time decision intelligence dashboards.",
            visual: <RealTimeGraph />,
            className: "md:col-span-2 md:row-span-1"
        },
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50/30 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
                    >
                        Foundation Core
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.1] tracking-tight mb-8"
                    >
                        A New Standard for <br />
                        <span className="text-gradient-iris">Operational Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-xl font-medium leading-relaxed"
                    >
                        Our unified AI architecture is designed to scale complex enterprise
                        support operations through autonomous decision-making and predictive analytics.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            className={cn(
                                "group glass-frosted p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between",
                                "hover:shadow-2xl hover:shadow-purple-100/50 glass-card-hover",
                                item.className
                            )}
                        >
                            <div className="relative z-20">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className={cn(
                                        "text-2xl font-black tracking-tight transition-colors duration-500",
                                        "text-slate-900 group-hover:text-purple-600",
                                        item.title === "Neural Routing" && "group-hover/routing:text-white"
                                    )}>
                                        {item.title}
                                    </h3>
                                    <ArrowUpRight className={cn(
                                        "w-5 h-5 transition-all duration-500",
                                        "text-slate-300 group-hover:text-purple-500 group-hover:rotate-45",
                                        item.title === "Neural Routing" && "group-hover/routing:text-purple-400"
                                    )} />
                                </div>
                                <p className={cn(
                                    "text-sm font-medium leading-relaxed max-w-[240px] transition-colors duration-500",
                                    "text-slate-500",
                                    item.title === "Neural Routing" && "group-hover/routing:text-slate-400"
                                )}>
                                    {item.desc}
                                </p>
                            </div>

                            <div className="relative z-10 flex-grow flex items-center justify-center py-6">
                                {item.visual && (
                                    <div className="w-full transform group-hover:scale-110 transition-transform duration-700 ease-out">
                                        {item.visual}
                                    </div>
                                )}
                                {item.icon && (
                                    <div className="p-5 rounded-2xl bg-purple-50 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-purple-100 group-hover:shadow-purple-400/20">
                                        {item.icon}
                                    </div>
                                )}
                            </div>

                            {/* Background interactive elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
