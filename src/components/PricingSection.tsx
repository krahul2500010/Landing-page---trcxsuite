"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
    return (
        <section id="pricing" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]"
                    >
                        Pricing & Plans
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
                        Scale your <span className="text-gradient-iris">Operations</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        Transparent pricing designed for growing teams and global enterprises.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Plan */}
                    <div className="glass-frosted p-10 rounded-[2.5rem] border-slate-200/60 flex flex-col justify-between hover:border-purple-200 transition-colors">
                        <div>
                            <div className="text-slate-900 font-bold text-2xl mb-2">Starter</div>
                            <p className="text-slate-500 text-sm mb-8 font-medium">Perfect for small teams getting started.</p>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-extrabold text-slate-950">$0</span>
                                <span className="text-slate-400 font-semibold">/14 days</span>
                            </div>
                            <ul className="space-y-4 mb-12">
                                {["Up to 5 agents", "Standard Neural Match", "SLA Guard Basic", "Community Support"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                                        <Check className="w-5 h-5 text-purple-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href="/register">
                            <button className="w-full py-5 rounded-2xl border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors">
                                Start Free Trial
                            </button>
                        </Link>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative p-10 rounded-[2.5rem] bg-slate-950 border border-slate-800 flex flex-col justify-between shadow-2xl shadow-purple-900/20 transform md:scale-105 z-20">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl">
                            Most Popular
                        </div>
                        <div>
                            <div className="text-white font-bold text-2xl mb-2">Professional</div>
                            <p className="text-slate-400 text-sm mb-8 font-medium">Advanced features for growing orgs.</p>
                            <div className="flex items-baseline gap-1 mb-8 text-white">
                                <span className="text-6xl font-extrabold">$499</span>
                                <span className="text-slate-500 font-semibold">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-12">
                                {["Unlimited Agents", "Deep Neural Intent", "SLA Guard Pro", "Priority Support", "Advanced Analytics"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-200 font-semibold text-sm">
                                        <Check className="w-5 h-5 text-purple-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href="/register">
                            <button className="w-full py-5 rounded-2xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-all shadow-xl shadow-purple-900/20">
                                Buy Now
                            </button>
                        </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="glass-frosted p-10 rounded-[2.5rem] border-slate-200/60 flex flex-col justify-between hover:border-purple-200 transition-colors">
                        <div>
                            <div className="text-slate-900 font-bold text-2xl mb-2">Enterprise</div>
                            <p className="text-slate-500 text-sm mb-8 font-medium">Custom solutions for global scale.</p>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-extrabold text-slate-950">Custom</span>
                            </div>
                            <ul className="space-y-4 mb-12">
                                {["Everything in Pro", "SSO/SAML Auth", "On-Prem Options", "Dedicated AM", "Custom Integrations"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                                        <Check className="w-5 h-5 text-purple-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href="/register">
                            <button className="w-full py-5 rounded-2xl border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors">
                                Contact Sales
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
