"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const plans = [
  {
    name: "Basic",
    price: { monthly: "$9.99", yearly: "$99" },
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "10+ Fitness Games",
      "Basic Progress Tracking",
      "Limited Achievements",
      "Community Access",
      "1 Fitness Avatar",
    ],
    limitations: ["No Multiplayer Challenges", "No Custom Workouts", "Standard Support"],
  },
  {
    name: "Pro",
    price: { monthly: "$19.99", yearly: "$199" },
    description: "Ideal for fitness enthusiasts looking for more challenges",
    features: [
      "50+ Fitness Games",
      "Advanced Progress Tracking",
      "Unlimited Achievements",
      "Community Access",
      "3 Fitness Avatars",
      "Multiplayer Challenges",
      "Custom Workout Creator",
      "Priority Support",
    ],
    limitations: [],
    popular: true,
  },
  {
    name: "Family",
    price: { monthly: "$29.99", yearly: "$299" },
    description: "Share the fitness fun with up to 5 family members",
    features: [
      "All Pro Features",
      "5 User Accounts",
      "Family Challenges",
      "Shared Progress Dashboard",
      "Unlimited Avatars",
      "Premium Support",
      "Early Access to New Games",
    ],
    limitations: [],
  },
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <section id="pricing" className="py-20 md:py-32 bg-primary/5">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">Choose the plan that fits your fitness goals and budget.</p>

          <div className="flex items-center justify-center space-x-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                billingCycle === "monthly"
                  ? "bg-primary text-white"
                  : "bg-background border hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                billingCycle === "yearly"
                  ? "bg-primary text-white"
                  : "bg-background border hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly <span className="text-xs font-normal opacity-75">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-background rounded-xl border shadow-sm overflow-hidden ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">Most Popular</div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price[billingCycle]}</span>
                  <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "year"}</span>
                </div>

                <Button className={`w-full mb-6 ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
                  Get Started
                </Button>

                <div className="space-y-4">
                  <p className="font-medium">What's included:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <>
                      <p className="font-medium mt-4">Not included:</p>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
