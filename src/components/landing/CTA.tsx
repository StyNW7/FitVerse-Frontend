"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of users who have made exercise fun again with FitVerse. Start your 14-day free trial today —
            no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">No credit card required. Cancel anytime.</p>
        </motion.div>

        {/* App store badges */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-muted-foreground mr-4">Available on:</p>
          <div className="flex gap-4">
            <div className="h-12 w-36 bg-black rounded-lg flex items-center justify-center text-white">App Store</div>
            <div className="h-12 w-36 bg-black rounded-lg flex items-center justify-center text-white">Google Play</div>
            <div className="h-12 w-36 bg-black rounded-lg flex items-center justify-center text-white">Web App</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
