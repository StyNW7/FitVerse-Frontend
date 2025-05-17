import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-primary">
          StreamLine
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-primary">
            Features
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-primary">
            Pricing
          </a>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}
