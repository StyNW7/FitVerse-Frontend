import { Button } from "@/components/ui/button"
import { ArrowRight, Play, X } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Gamify Your Fitness Journey
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Turn Your Workouts Into
              <span className="block mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Epic Adventures
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              FitVerse transforms ordinary exercises into exciting game-like experiences. Level up your fitness, compete
              with friends, and unlock achievements while getting in shape.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsVideoModalOpen(true)}>
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border shadow-xl">
              <img
                src="/Images/Landing/banner.png"
                alt="FitVerse in action"
                width={1920}
                height={1080}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex items-center space-x-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">+</span>
              </div>
              <div>
                <p className="text-sm font-medium">Level Up!</p>
                <p className="text-xs text-muted-foreground">Fitness Level 7</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="text-sm font-medium">🔥 7-Day Streak</p>
              <div className="mt-1 h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "70%" }}></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
            <p className="text-3xl font-bold text-primary">1M+</p>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-sm text-muted-foreground">Fitness Games</p>
          </div>
          <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
            <p className="text-3xl font-bold text-primary">200+</p>
            <p className="text-sm text-muted-foreground">Achievements</p>
          </div>
          <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
            <p className="text-3xl font-bold text-primary">4.8</p>
            <p className="text-sm text-muted-foreground">User Rating</p>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>Video player would be here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
