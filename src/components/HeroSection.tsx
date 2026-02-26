"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Brain, Zap, Terminal, Activity, Database } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-white">
            {/* Liquid Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/30 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-fuchsia-50/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-frosted text-purple-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-12"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600"></span>
                    </span>
                    The Intelligence standard 2.0
                </motion.div>

                <div className="max-w-5xl mx-auto mb-16">
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 select-none text-slate-950">
                        Transform every support <br />
                        <span className="text-gradient-iris">flow with neural AI.</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="max-w-2xl mx-auto text-xl text-slate-500 font-medium leading-relaxed"
                    >
                        TRCX-SUITE is the enterprise-grade neural engine for autonomous
                        assignment, real-time SLA locking, and capacity planning.
                    </motion.p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
                    <Link href="/register">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-5 bg-purple-600 text-white rounded-2xl text-lg font-bold overflow-hidden shadow-2xl shadow-purple-200"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Start Trial Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                    </Link>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass-frosted px-10 py-5 rounded-2xl text-lg font-bold text-slate-900 border border-slate-200/60 hover:border-purple-300 transition-colors flex items-center gap-3"
                    >
                        <Terminal className="w-5 h-5 text-purple-600" />
                        Explore the Core
                    </motion.button>
                </div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-32"
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Trusted by global industry leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-slate-900">
                            <Activity className="w-6 h-6" /> NEURAL.CO
                        </div>
                        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-slate-900">
                            <Cpu className="w-6 h-6" /> CORE-SYS
                        </div>
                        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-slate-900">
                            <Database className="w-6 h-6" /> DATA-FLOW
                        </div>
                        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-slate-900">
                            <Zap className="w-6 h-6" /> ZINC
                        </div>
                    </div>
                </motion.div>

                {/* Visualization Area - Slightly scaled down */}
                <div className="relative aspect-[21/7] max-w-6xl mx-auto">
                    <div className="absolute inset-0 glass-frosted rounded-[3rem] border border-white/40 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />

                        {/* Grid Pattern */}
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.03) 1px, transparent 0)',
                            backgroundSize: '30px 30px'
                        }} />

                        {/* Animated Core */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"
                            />
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-30px] border border-purple-100/50 rounded-full border-dashed"
                                />
                                <div className="w-24 h-24 glass-frosted rounded-[2rem] flex items-center justify-center border-purple-200/50 shadow-inner">
                                    <Brain className="w-10 h-10 text-purple-600" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Labels */}
                        <FloatingNode top="15%" left="20%" icon={<Activity className="w-4 h-4" />} title="Processing" />
                        <FloatingNode top="65%" left="15%" icon={<Database className="w-4 h-4" />} title="Active Storage" />
                        <FloatingNode top="20%" right="20%" icon={<Zap className="w-4 h-4" />} title="Neural Speed" />
                        <FloatingNode top="70%" right="15%" icon={<Cpu className="w-4 h-4" />} title="Auto-Assign" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FloatingNode({ top, left, right, icon, title }: any) {
    return (
        <motion.div
            style={{ top, left, right }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20"
        >
            <div className="glass-frosted px-6 py-3 rounded-2xl flex items-center gap-3 border-white/60 shadow-lg cursor-default hover:scale-110 transition-transform">
                <div className="p-2 bg-purple-100/50 rounded-lg text-purple-600">
                    {icon}
                </div>
                <span className="text-sm font-black text-slate-800 tracking-tight">{title}</span>
            </div>
        </motion.div>
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
