"use client";

import { motion } from "framer-motion";
import { Check, TrendingUp, Zap, Clock, Users } from "lucide-react";

export function BenefitsSection() {
    const benefits = [
        { title: "Reduce resolution time", desc: "Autonomous matching cuts down the support lifecycle by 40%." },
        { title: "Optimize utilization", desc: "Never leave talent on the bench with real-time capacity tracking." },
        { title: "Prevent agent overload", desc: "Intelligent load balancing based on individual skill stress levels." },
        { title: "SLA compliance", desc: "Automated escalation paths ensure 99.9% governance." },
    ];

    return (
        <section id="solutions" className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">
                            Why Enterprises Choose <span className="text-purple-600">TRCX-SUITE</span>
                        </h2>

                        <div className="space-y-6">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all flex-shrink-0">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="flex-grow p-5 glass-frosted rounded-2xl border border-purple-50 group-hover:border-purple-200 transition-all">
                                        <h3 className="font-bold text-slate-900 mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="glass-frosted p-8 rounded-[3rem] border-purple-100 relative overflow-hidden shadow-2xl shadow-purple-900/5">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                            <div className="mb-8 flex items-center justify-between">
                                <div className="text-xl font-black text-slate-900">Performance Pulse</div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Efficiency", val: "+28%", icon: <TrendingUp className="w-4 h-4" /> },
                                    { label: "SLA Met", val: "99.8%", icon: <Zap className="w-4 h-4" /> },
                                    { label: "Resolution", val: "4.2m", icon: <Clock className="w-4 h-4" /> },
                                    { label: "Active Ops", val: "124", icon: <Users className="w-4 h-4" /> },
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-purple-50/50 rounded-2xl border border-purple-100">
                                        <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</div>
                                        <div className="text-2xl font-black text-slate-900">{stat.val}</div>
                                        <div className="mt-2 text-purple-500/50">{stat.icon}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-purple-100/50 blur-[100px]" />
                        <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-indigo-50/50 blur-[100px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
