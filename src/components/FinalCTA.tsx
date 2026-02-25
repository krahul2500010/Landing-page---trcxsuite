"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-24 bg-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto glass-frosted rounded-[4rem] p-12 md:p-24 text-center border border-purple-100 relative overflow-hidden shadow-2xl shadow-purple-900/5"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                            Bring Intelligence to Your Support Operations
                        </h2>
                        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
                            Join hundreds of enterprise teams optimizing their resource allocation and ticket resolution with TRCX-SUITE.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <button className="shimmer-mask bg-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-purple-200">
                            Start Free Trial
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="glass-frosted text-slate-700 border border-purple-100 px-12 py-5 rounded-2xl text-lg font-black transition-all hover:bg-white/40 flex items-center gap-3">
                            Request Demo
                        </button>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100/50 blur-[80px]" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-50/50 blur-[80px]" />
            </motion.div>
        </section>
    );
}
