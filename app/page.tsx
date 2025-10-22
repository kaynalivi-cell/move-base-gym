"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { useState } from "react"

export default function MoveBasePricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual")

  const plans = [
    {
      name: "Starting Simple",
      subtitle: "BASIC PLAN",
      monthlyPrice: 45,
      annualPrice: 30,
      features: [
        "Cardio",
        "Weight Training",
        "+ Digital Platform"
      ],
      buttonText: "JOIN NOW",
      buttonVariant: "default" as const,
      cardClass: "bg-white dark:bg-zinc-900"
    },
    {
      name: "Fitness Full Club",
      subtitle: "COMPLETE PLAN",
      monthlyPrice: 55,
      annualPrice: 40,
      features: [
        "3D Body Analysis",
        "Coach+ (Support with coach)",
        "Cardio",
        "Weight Training",
        "+ Digital Platform"
      ],
      buttonText: "JOIN NOW",
      buttonVariant: "default" as const,
      cardClass: "bg-white dark:bg-zinc-900"
    },
    {
      name: "PRO Wellness",
      subtitle: "SPECIAL PLAN",
      monthlyPrice: 65,
      annualPrice: 50,
      trending: true,
      features: [
        "Simple Pilates",
        "Ice Bath",
        "3D Body Analysis",
        "Coach+ (Support with coach)",
        "Cardio",
        "Weight Training",
        "+ Digital Platform"
      ],
      buttonText: "JOIN NOW",
      buttonVariant: "secondary" as const,
      cardClass: "bg-zinc-800 dark:bg-zinc-950 text-white"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-950 dark:to-zinc-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4">
            Move Base
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Choose the perfect plan for your fitness journey
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white dark:bg-zinc-800 p-2 rounded-full shadow-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === "annual"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              12 Months
              <Badge className="ml-2 bg-green-500 text-white">Save 25%</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`${plan.cardClass} relative overflow-hidden transition-transform hover:scale-105 ${
                plan.trending ? "border-2 border-zinc-600 shadow-2xl" : "shadow-lg"
              }`}
            >
              {plan.trending && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-zinc-500 text-white">Trending</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardDescription className={`text-sm uppercase tracking-wider ${
                  plan.trending ? "text-zinc-400" : "text-zinc-500"
                }`}>
                  {plan.subtitle}
                </CardDescription>
                <CardTitle className={`text-3xl md:text-4xl font-bold ${
                  plan.trending ? "text-white" : "text-zinc-900 dark:text-white"
                }`}>
                  {plan.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        plan.trending ? "text-white" : "text-zinc-900 dark:text-white"
                      }`} />
                      <span className={`text-sm ${
                        plan.trending ? "text-white" : "text-zinc-700 dark:text-zinc-300"
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700">
                  <div className={`text-sm uppercase tracking-wider mb-2 ${
                    plan.trending ? "text-zinc-400" : "text-zinc-500"
                  }`}>
                    {billingCycle === "annual" ? "6 MONTHS LOYALTY" : "MONTHLY PLAN"}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${
                      plan.trending ? "text-white" : "text-zinc-900 dark:text-white"
                    }`}>
                      ${billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-xl ${
                      plan.trending ? "text-zinc-400" : "text-zinc-500"
                    }`}>
                      /month
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.trending
                      ? "bg-white text-zinc-900 hover:bg-zinc-100"
                      : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                  }`}
                >
                  {plan.buttonText}
                </Button>
                <Button
                  variant="outline"
                  className={`w-full ${
                    plan.trending
                      ? "border-white text-white hover:bg-white/10"
                      : "border-zinc-300 dark:border-zinc-700"
                  }`}
                >
                  LEARN MORE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-zinc-600 dark:text-zinc-400">
            All plans include access to our state-of-the-art facilities
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
            No commitment • Cancel anytime • Start today
          </p>
        </div>
      </div>
    </div>
  )
}