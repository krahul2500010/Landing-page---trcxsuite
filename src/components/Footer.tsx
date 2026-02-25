"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    const links = [
        { category: "Product", items: ["Features", "Pricing", "Security", "Roadmap"] },
        { category: "Company", items: ["About TRCX-SUITE", "Careers", "Contact", "Partners"] },
        { category: "Resources", items: ["Documentation", "API Reference", "Status", "Support"] },
        { category: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
    ];

    return (
        <footer className="bg-[#fafafa] border-t border-purple-50 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-black text-lg">T</div>
                            <span className="text-xl font-black text-slate-900 tracking-tighter">TRCX-SUITE</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                            The unified intelligence platform for enterprise resource management and ticket resolution optimization.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400">
                            {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="hover:text-purple-600 transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {links.map((group) => (
                        <div key={group.category} className="space-y-6">
                            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">{group.category}</h4>
                            <ul className="space-y-4">
                                {group.items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-10 border-t border-purple-50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-xs font-bold text-slate-400">
                        © 2026 TRCX-SUITE Platform Intelligence. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
