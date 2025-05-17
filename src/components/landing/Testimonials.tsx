import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Play } from "lucide-react"

const testimonials = [
  {
    quote: "FitVerse has completely transformed my workout routine. I've never had so much fun exercising!",
    author: "Sarah Johnson",
    role: "Lost 30 lbs in 6 months",
    avatar: "/Images/Avatar/man-1.png",
    rating: 5,
  },
  {
    quote:
      "As a busy parent, I struggled to find time for fitness. FitVerse makes it easy to fit in quick, fun workouts.",
    author: "Michael Chen",
    role: "Busy professional",
    avatar: "/Images/Avatar/woman-1.png",
    rating: 5,
  },
  {
    quote: "The gamification aspect keeps me motivated. I'm actually excited to exercise now!",
    author: "Emma Rodriguez",
    role: "Fitness enthusiast",
    avatar: "/Images/Avatar/man-2.png",
    rating: 4,
  },
  {
    quote: "I've tried many fitness apps, but FitVerse is the only one that's kept me engaged long-term.",
    author: "David Kim",
    role: "Former gym dropout",
    avatar: "/Images/Avatar/woman-2.png",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of happy users who have transformed their fitness journey with FitVerse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-background/60 backdrop-blur-sm border rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-lg mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Video */}
        <motion.div
          className="mt-16 relative rounded-xl overflow-hidden border shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="aspect-video bg-gray-900 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-xl font-semibold mb-2">Watch Success Stories</p>
              <p className="text-muted-foreground">See how FitVerse has changed lives</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white">
              <Play className="h-6 w-6 ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
