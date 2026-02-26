"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Building2, User, Package, Upload, Globe } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        companyUrl: "",
        plan: "professional"
    });

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-purple-100 selection:text-purple-900">
            {/* Nav */}
            <div className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-slate-900">TRCX-SUITE</span>
                </Link>
                <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? "w-8 bg-purple-600" : "w-4 bg-slate-100"}`}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-xl mx-auto pt-40 pb-20 px-6">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <h1 className="text-4xl font-extrabold tracking-tight text-slate-950">Personal Details</h1>
                                <p className="text-slate-500 font-medium">Let&apos;s start with who you are.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <FormInput label="First Name" placeholder="Jane" />
                                <FormInput label="Last Name" placeholder="Doe" />
                            </div>
                            <FormInput label="Work Email" placeholder="jane@company.com" type="email" />
                            <FormInput label="Phone Number" placeholder="+1 (555) 000-0000" />

                            <button
                                onClick={nextStep}
                                className="w-full py-5 bg-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-200 hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                            >
                                Continue
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <h1 className="text-4xl font-extrabold tracking-tight text-slate-950">Company Profile</h1>
                                <p className="text-slate-500 font-medium">Tell us about your organization.</p>
                            </div>

                            <FormInput label="Company Name" placeholder="Neural Systems Inc." />
                            <FormInput label="Company URL" placeholder="https://neural-systems.com" icon={<Globe className="w-4 h-4" />} />

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Company Logo</label>
                                <div className="border-2 border-dashed border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 hover:border-purple-200 transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                                        <Upload className="w-5 h-5 text-slate-400 group-hover:text-purple-600" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-slate-600">Click to upload or drag and drop</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={prevStep}
                                    className="py-5 bg-slate-50 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="py-5 bg-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-200 hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                                >
                                    Next
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <h1 className="text-4xl font-extrabold tracking-tight text-slate-950">Select Your Path</h1>
                                <p className="text-slate-500 font-medium">Choose the engine that powers your growth.</p>
                            </div>

                            <div className="space-y-4">
                                <PlanCard
                                    selected={formData.plan === 'starter'}
                                    onClick={() => setFormData({ ...formData, plan: 'starter' })}
                                    title="Starter"
                                    price="$0"
                                    desc="14-day full access exploration."
                                />
                                <PlanCard
                                    selected={formData.plan === 'professional'}
                                    onClick={() => setFormData({ ...formData, plan: 'professional' })}
                                    title="Professional"
                                    price="$499"
                                    desc="Full scale neural operations."
                                    popular
                                />
                                <PlanCard
                                    selected={formData.plan === 'enterprise'}
                                    onClick={() => setFormData({ ...formData, plan: 'enterprise' })}
                                    title="Enterprise"
                                    price="Custom"
                                    desc="Tailored for global infrastructure."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={prevStep}
                                    className="py-5 bg-slate-50 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back
                                </button>
                                <button
                                    className="py-5 bg-slate-950 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-slate-200 hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
                                >
                                    Start My Trial
                                    <Check className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

function FormInput({ label, placeholder, type = "text", icon }: { label: string, placeholder: string, type?: string, icon?: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</label>
            <div className="relative group">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 transition-all focus:bg-white focus:border-purple-600 focus:ring-4 focus:ring-purple-50 outline-none font-semibold text-slate-900 placeholder:text-slate-300 ${icon ? 'pl-11 pr-4' : 'px-4'}`}
                />
            </div>
        </div>
    );
}

function PlanCard({ selected, onClick, title, price, desc, popular }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full p-6 rounded-[2rem] border-2 text-left transition-all relative ${selected ? 'border-purple-600 bg-purple-50/30' : 'border-slate-50 hover:border-slate-200 bg-white'}`}
        >
            {popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600 text-white text-[8px] font-bold uppercase tracking-widest rounded-full">
                    Most Popular
                </div>
            )}
            <div className="flex justify-between items-center mb-1">
                <span className={`text-xl font-bold ${selected ? 'text-purple-600' : 'text-slate-900'}`}>{title}</span>
                <span className="text-xl font-bold text-slate-950">{price}</span>
            </div>
            <p className="text-sm font-semibold text-slate-400">{desc}</p>
        </button>
    );
}
