import Link from "next/link"
import { Download, ChefHat, ShoppingCart, Refrigerator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Refrigerator className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Fridge Genius</span>
          </div>
          <nav className="hidden space-x-6 md:block">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-blue-600">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-blue-600">
              How It Works
            </Link>
            <Link href="#team" className="text-sm font-medium text-muted-foreground hover:text-blue-600">
              Team
            </Link>
          </nav>
          <Button>Download App</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Your Smart Kitchen Assistant
            </h1>
            <p className="mt-6 animate-fade-up text-xl text-muted-foreground">
              Manage ingredients, discover recipes, and reduce food waste—all in one intelligent app.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="animate-fade-up">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="animate-fade-up">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-24">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card className="group relative overflow-hidden p-6 transition-all hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <ChefHat className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold">Recipe Suggestions</h3>
            <p className="mt-2 text-muted-foreground">
              Get personalized recipe recommendations based on your available ingredients.
            </p>
          </Card>
          <Card className="group relative overflow-hidden p-6 transition-all hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <ShoppingCart className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold">Smart Shopping Lists</h3>
            <p className="mt-2 text-muted-foreground">
              AI-powered shopping lists that know what you need before you do.
            </p>
          </Card>
          <Card className="group relative overflow-hidden p-6 transition-all hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <Refrigerator className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold">Food Management</h3>
            <p className="mt-2 text-muted-foreground">Track expiration dates and reduce food waste effortlessly.</p>
          </Card>
        </div>
      </section>

      {/* Reports Section */}
      <section className="container py-24">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Analysis Reports</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-xl font-bold">Analysis Report</h3>
            <p className="mt-2 text-muted-foreground">
              Detailed analysis of the Fridge Genius system and its components.
            </p>
            <Button className="mt-4" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Analysis Report
            </Button>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold">High-Level Design Report</h3>
            <p className="mt-2 text-muted-foreground">Technical architecture and design specifications.</p>
            <Button className="mt-4" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Design Report
            </Button>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-slate-50">
        <div className="container py-24">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {["Burcu Gül", "İrem Güngör", "Sude Sarı"].map((name) => (
              <Card key={name} className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="mt-2 text-muted-foreground">Co-founder & Developer</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Refrigerator className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Fridge Genius</span>
            </div>
            <p className="text-center text-sm text-muted-foreground">© 2024 Fridge Genius App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

