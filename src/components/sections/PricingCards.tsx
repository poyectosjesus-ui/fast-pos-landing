"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";

export function PricingCards() {
  const plans = [
    {
      name: "Starter",
      desc: "For small businesses starting out.",
      price: "$2,500",
      features: ["1 Register", "1 User", "Basic Features", "24/7 Support"],
      button: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      desc: "For growing stores with high volume.",
      price: "$5,500",
      features: ["Up to 3 Registers", "5 Users", "Advanced Analytics", "Inventory Sync", "Priority Support"],
      button: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "For serious multi-location businesses.",
      price: "Custom",
      features: ["Unlimited Registers", "Unlimited Users", "Custom Integrations", "On-site Training"],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold tracking-wide uppercase text-sm"
        >
          Pricing
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          Simple, transparent pricing
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, i) => (
          <GlassCard 
            key={i} 
            className={`flex flex-col relative group transition-transform hover:-translate-y-2 duration-500 ${plan.popular ? 'border-blue-500/50 scale-105 shadow-[0_0_40px_rgba(37,99,235,0.15)] bg-white/[0.05] z-10' : 'opacity-90'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            )}
            
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-slate-400 text-sm h-10 mb-6">{plan.desc}</p>
            <div className="text-4xl font-extrabold text-white mb-8">
              {plan.price}<span className="text-lg text-slate-500 font-medium">/mo</span>
            </div>
            
            <ul className="flex flex-col gap-4 mb-8 flex-1">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-center text-slate-300">
                  <span className="mr-3 text-blue-400">✓</span> {feat}
                </li>
              ))}
            </ul>

            <MagneticButton variant={plan.popular ? "primary" : "secondary"} className="w-full">
              {plan.button}
            </MagneticButton>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
