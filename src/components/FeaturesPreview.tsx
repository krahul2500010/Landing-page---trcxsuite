"use client";

import { motion } from "framer-motion";
import { Users, Ticket, Brain, Zap, Target, Gauge, Activity } from "lucide-react";

export function FeaturesPreview() {
    return (
        <section id="product" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        Feature deep dive
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.1]">
                        Architected for <span className="text-gradient-iris">Modern Support</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        A dual-engine platform designed to eliminate silos between your
                        resource management and service resolution workflows.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* RMS Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group p-12 rounded-[3rem] glass-frosted border border-slate-200/60 hover:border-purple-300/50 transition-all duration-500"
                    >
                        <div className="w-20 h-20 rounded-3xl bg-slate-950 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-2xl">
                            <Users className="w-10 h-10" />
                        </div>
                        <h3 className="text-4xl font-black text-slate-950 mb-4 tracking-tight">Resource Intelligence</h3>
                        <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed">
                            Deep visibility into your workforce, skill matrix, and capacity distribution.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Organizational structure visibility", icon: <Target className="w-4 h-4" /> },
                                { title: "Skill & role mapping", icon: <Brain className="w-4 h-4" /> },
                                { title: "Capacity & availability tracking", icon: <Gauge className="w-4 h-4" /> },
                                { title: "Bench & workload analytics", icon: <Activity className="w-4 h-4" /> },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 text-slate-800 font-bold group/item"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-purple-50 group-hover/item:text-purple-600 transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="text-lg">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* TMS Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group p-12 rounded-[3rem] bg-slate-950 border border-slate-800  transition-all duration-500 shadow-2xl shadow-purple-900/10"
                    >
                        <div className="w-20 h-20 rounded-3xl bg-purple-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-2xl shadow-purple-500/20">
                            <Ticket className="w-10 h-10" />
                        </div>
                        <h3 className="text-4xl font-black text-white mb-4 tracking-tight">Ticket Intelligence</h3>
                        <p className="text-slate-400 mb-12 text-lg font-medium leading-relaxed">
                            End-to-end lifecycle management with neural orchestration and SLA protection.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Lifecycle & state management", icon: <Zap className="w-4 h-4" /> },
                                { title: "SLA & escalation workflows", icon: <Activity className="w-4 h-4" /> },
                                { title: "Assignment optimization", icon: <Target className="w-4 h-4" /> },
                                { title: "Resolution analytics", icon: <Gauge className="w-4 h-4" /> },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 text-slate-200 font-bold group/item"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover/item:bg-purple-500/10 group-hover/item:text-purple-400 transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="text-lg">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
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
