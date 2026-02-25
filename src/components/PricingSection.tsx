"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export function PricingSection() {
    const [isSubscription, setIsSubscription] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-black text-slate-900 leading-tight">Start with TRCX-SUITE Today</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                        Choose the path that fits your organization's needs.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="glass-frosted p-1.5 rounded-2xl flex items-center border-purple-100 shadow-sm">
                        <button
                            onClick={() => setIsSubscription(false)}
                            className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${!isSubscription ? "bg-purple-600 text-white shadow-lg shadow-purple-200" : "text-slate-500 hover:text-slate-900"}`}
                        >
                            Free Trial
                        </button>
                        <button
                            onClick={() => setIsSubscription(true)}
                            className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${isSubscription ? "bg-purple-600 text-white shadow-lg shadow-purple-200" : "text-slate-500 hover:text-slate-900"}`}
                        >
                            Subscription
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!isSubscription ? (
                            <motion.div
                                key="trial"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="glass-frosted rounded-[3rem] p-12 border-purple-100 flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="flex-grow space-y-6">
                                    <div className="text-purple-600 text-[10px] font-black uppercase tracking-widest">Limited Time</div>
                                    <h3 className="text-4xl font-black text-slate-900 leading-tight">14-Day Full Access Trial</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        Test our autonomous engine with your real CRM data. No credit card required. Experience full workforce lifecycle management for 14 days.
                                    </p>
                                    <ul className="space-y-3">
                                        {["Full RMS & TMS Access", "Unlimited Agent Matching", "Standard Data Privacy"].map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-slate-600 font-medium">
                                                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0 text-center space-y-6">
                                    <div className="text-6xl font-black text-slate-900">$0</div>
                                    <button className="shimmer-mask bg-purple-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-purple-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                        Get Started
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sub"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="glass-frosted rounded-[3rem] p-12 border-purple-100 flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="flex-grow space-y-6">
                                    <div className="text-purple-600 text-[10px] font-black uppercase tracking-widest">Enterprise Ready</div>
                                    <h3 className="text-4xl font-black text-slate-900 leading-tight">Scale Without Limits</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        Full platform integration with advanced security, SSO, and dedicated success management.
                                    </p>
                                    <ul className="space-y-3">
                                        {["Everything in Trial", "Dedicated Hub Support", "On-Prem Deployment Options"].map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-slate-600 font-medium">
                                                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0 text-center space-y-6">
                                    <div className="text-xl font-bold text-slate-500 mb-[-1rem]">Custom Pricing</div>
                                    <div className="text-4xl font-black text-slate-900">Enterprise</div>
                                    <button className="shimmer-mask bg-purple-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-purple-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                        Contact Sales
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
