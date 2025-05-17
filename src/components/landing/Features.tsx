import { motion } from "framer-motion"
import { Trophy, Gamepad2, Users, Dumbbell, Zap, BarChart } from "lucide-react"

const features = [
  {
    icon: <Gamepad2 className="h-10 w-10 text-primary" />,
    title: "Gamified Workouts",
    description: "Transform boring exercises into exciting games and adventures that make fitness fun.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Achievements & Rewards",
    description: "Earn badges, unlock levels, and collect rewards as you reach fitness milestones.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Social Challenges",
    description: "Compete with friends, join teams, and participate in community fitness challenges.",
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: "Personalized Routines",
    description: "AI-powered workout plans that adapt to your fitness level and goals.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Real-time Feedback",
    description: "Get instant feedback on your form and performance to maximize results.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Progress Tracking",
    description: "Visualize your fitness journey with detailed stats and progress reports.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Game-Changing Fitness Features</h2>
          <p className="text-lg text-muted-foreground">
            FitVerse combines cutting-edge technology with game design to make your fitness journey more engaging,
            effective, and enjoyable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background/60 backdrop-blur-sm border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
