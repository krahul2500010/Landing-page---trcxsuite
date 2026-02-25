"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Brain, Zap, Terminal, Activity, Database } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative pt-40 pb-56 overflow-hidden bg-[#fafafa]">
            {/* Iris Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/40 blur-[120px] rounded-full" />
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-50/30 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-50/40 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-frosted border-purple-100 text-purple-600 text-[11px] font-black uppercase tracking-[0.3em] mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Neural Operations Engine 2.0
                    </motion.div>

                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
                        <span className="text-gradient-iris">Think Beyond</span><br />
                        <span className="text-slate-900">Traditional</span><br />
                        <span className="text-gradient-iris">Support</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="shimmer-mask bg-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-purple-200">
                            Deploy Agent
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="glass-frosted text-slate-700 px-12 py-5 rounded-2xl text-lg font-black transition-all hover:bg-white/40 border border-purple-100 flex items-center gap-3">
                            <Terminal className="w-5 h-5 text-purple-500" />
                            View Docs
                        </button>
                    </div>
                </div>

                {/* The "Command Center" Central AI Core */}
                <div className="relative max-w-5xl mx-auto py-20">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Animated SVG Neural Lines */}
                        <svg className="w-full h-full max-w-[800px] absolute" viewBox="0 0 800 400">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="#7c3aed" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            {/* Flow Lines from Left (Resource) */}
                            <path d="M 50 100 Q 200 100 400 200" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-neural" />
                            <path d="M 50 300 Q 200 300 400 200" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-neural" style={{ animationDelay: '1s' }} />
                            {/* Flow Lines from Right (Tickets) */}
                            <path d="M 750 100 Q 600 100 400 200" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-neural" style={{ animationDelay: '0.5s' }} />
                            <path d="M 750 300 Q 600 300 400 200" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-neural" style={{ animationDelay: '1.5s' }} />
                        </svg>

                        {/* Central Glow Orb */}
                        <div className="w-40 h-40 bg-purple-400/10 rounded-full blur-[60px] animate-pulse" />
                    </div>

                    <div className="relative z-10 flex items-center justify-center">
                        {/* Rotating Rings */}
                        <div className="relative flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[450px] h-[450px] border border-purple-200/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[300px] h-[300px] border border-purple-300/40 rounded-full border-dashed"
                            />

                            {/* Central Core Sphere */}
                            <div className="w-32 h-32 glass-frosted rounded-[3rem] p-4 flex items-center justify-center bloom-iris relative overflow-hidden group border-purple-200">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Brain className="w-12 h-12 text-purple-600 relative z-10" />

                                {/* Orbiting Nodes */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-orbit" />
                                </div>
                            </div>
                        </div>

                        {/* Input Bento Cards (Left) */}
                        <div className="absolute -left-12 space-y-4">
                            <AgentIOBlock title="CRM Ingest" status="Active" icon={<Database className="w-4 h-4" />} />
                            <AgentIOBlock title="Cap Analysis" status="Predicting" icon={<Activity className="w-4 h-4" />} delay={0.2} />
                        </div>

                        {/* Output Bento Cards (Right) */}
                        <div className="absolute -right-12 space-y-4">
                            <AgentIOBlock title="Auto Assignment" status="Optimized" icon={<Cpu className="w-4 h-4" />} delay={0.4} theme="success" />
                            <AgentIOBlock title="SLA Lock" status="Guaranteed" icon={<Zap className="w-4 h-4" />} delay={0.6} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AgentIOBlock({ title, status, icon, delay = 0, theme = "default" }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="glass-frosted p-4 rounded-2xl w-52 border border-purple-100 flex flex-col gap-2 hover:border-purple-300 transition-all cursor-default group"
        >
            <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl ${theme === 'success' ? 'bg-emerald-50/80 text-emerald-600' : 'bg-purple-50 text-purple-400'}`}>
                    {icon}
                </div>
                <div className={`text-[9px] font-black uppercase tracking-tighter ${theme === 'success' ? 'text-emerald-600' : 'text-purple-600'}`}>
                    {status}
                </div>
            </div>
            <div className="text-xs font-bold text-slate-800 tracking-tight">{title}</div>
            <div className="h-1 w-full bg-purple-50 rounded-full overflow-hidden">
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className={`h-full w-1/3 ${theme === 'success' ? 'bg-emerald-500' : 'bg-purple-500'}`}
                />
            </div>
        </motion.div>
    );
}
