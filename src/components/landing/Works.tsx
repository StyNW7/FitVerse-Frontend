import { motion } from "framer-motion"
import { Smartphone, UserCircle, Gamepad, Award } from "lucide-react"

const steps = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Sign Up & Connect",
    description: "Create your account and connect your devices to get started with FitVerse.",
  },
  {
    icon: <UserCircle className="h-8 w-8 text-primary" />,
    title: "Customize Your Avatar",
    description: "Design your in-game character and select your fitness preferences.",
  },
  {
    icon: <Gamepad className="h-8 w-8 text-primary" />,
    title: "Choose Your Adventure",
    description: "Select from various game worlds and fitness challenges based on your goals.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Play, Progress, Achieve",
    description: "Work out while playing games, track your progress, and earn rewards.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-primary/5">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How FitVerse Works</h2>
          <p className="text-lg text-muted-foreground">
            Getting started with FitVerse is easy. Follow these simple steps to begin your gamified fitness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden border shadow-xl">
                <img
                  src="/Images/Landing/works.png"
                  alt="FitVerse App Interface"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <Award className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium">Achievement Unlocked!</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <p className="text-sm font-medium">Daily Quest Completed</p>
                <p className="text-xs text-muted-foreground">+50 XP Earned</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
