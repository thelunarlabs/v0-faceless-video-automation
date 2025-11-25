"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  TrendingUp,
  Video,
  Brain,
  Gamepad2,
  MessageSquare,
  Headphones,
  Globe,
  Users,
  Palette,
  BarChart3,
  Rocket,
  Shield,
  CheckCircle2,
  Play,
  Star,
} from "lucide-react"
import { IconBrandYoutube, IconBrandTiktok, IconBrandInstagram } from "@tabler/icons-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { InfiniteCarousel } from "@/components/infinite-carousel"
import { VerticalVideoCarousel } from "@/components/vertical-video-carousel"

export default function LandingPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const languages1 = [
    { code: "🇺🇸", name: "English" },
    { code: "🇪🇸", name: "Spanish" },
    { code: "🇫🇷", name: "French" },
    { code: "🇩🇪", name: "German" },
    { code: "🇮🇹", name: "Italian" },
    { code: "🇯🇵", name: "Japanese" },
  ]

  const languages2 = [
    { code: "🇰🇷", name: "Korean" },
    { code: "🇨🇳", name: "Chinese" },
    { code: "🇮🇳", name: "Hindi" },
    { code: "🇵🇹", name: "Portuguese" },
    { code: "🇷🇺", name: "Russian" },
    { code: "🇦🇪", name: "Arabic" },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Content Creator",
      content: "AutoClips changed my life. I went from 0 to 50K followers in 3 months with automated posting!",
      rating: 5,
    },
    {
      name: "Mike R.",
      role: "Social Media Manager",
      content: "Best investment I've made. The automation saves me 20+ hours per week.",
      rating: 5,
    },
    {
      name: "Alex K.",
      role: "Influencer",
      content: "The quality is insane. People can't believe these are AI-generated videos.",
      rating: 5,
    },
  ]

  // Local brainrot vertical videos for carousels
  const carouselVideos1 = [
    { id: "v1", url: "/247-sunscreen-ad.mp4" },
    { id: "v2", url: "/Flicker in the Shadows.mp4" },
    { id: "v3", url: "/minecraft-parkour-video.mp4" },
    { id: "v4", url: "/The Dynamic Blueprint of Life.mp4" },
  ]

  const carouselVideos2 = [
    { id: "v5", url: "/The Universe Smells Like Burnt Steak.mp4" },
    { id: "v6", url: "/minecraft-parkour-video (1).mp4" },
    { id: "v7", url: "/247-sunscreen-ad.mp4" },
    { id: "v8", url: "/Flicker in the Shadows.mp4" },
  ]

  const carouselVideos3 = [
    { id: "v9", url: "/The Dynamic Blueprint of Life.mp4" },
    { id: "v10", url: "/The Universe Smells Like Burnt Steak.mp4" },
    { id: "v11", url: "/minecraft-parkour-video.mp4" },
    { id: "v12", url: "/247-sunscreen-ad.mp4" },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">AutoClips</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Link href="/signup">
              <Button size="sm">Start Free</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-8 md:py-12 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[700px]">
          {/* Left Side - Text and CTAs */}
          <div className="space-y-8">
            <Badge variant="secondary" className="gap-1.5 text-sm">
              <Sparkles className="size-3" />
              Trusted by 10,000+ Creators
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Create Viral Shorts on{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Autopilot
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The most optimized and easy-to-use tool for generating faceless videos. Generate unlimited content for
              YouTube Shorts, TikTok, and Reels. Schedule once, automate forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2 w-full sm:w-auto text-base h-12 px-8">
                  Start Creating Free
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 gap-2 bg-transparent">
                <Play className="size-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Side - 3 Vertical Video Carousels */}
          <div className="hidden lg:block relative h-[800px] -my-24">
            <div className="flex gap-2 h-full items-center justify-center">
              {/* First Column - Moving Down */}
              <div className="w-[200px] h-full">
                <VerticalVideoCarousel videos={carouselVideos1} direction="down" speed={25} />
              </div>

              {/* Second Column - Moving Up */}
              <div className="w-[200px] h-full">
                <VerticalVideoCarousel videos={carouselVideos2} direction="up" speed={28} />
              </div>

              {/* Third Column - Moving Down */}
              <div className="w-[200px] h-full">
                <VerticalVideoCarousel videos={carouselVideos3} direction="down" speed={30} />
              </div>
            </div>
            {/* Subtle sky blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-100/5 via-sky-50/3 to-sky-100/5 dark:from-sky-950/8 dark:via-sky-900/4 dark:to-sky-950/8 pointer-events-none" />
            {/* Fade edges to blend with background */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Video Preview Mockup */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted/30 aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="size-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto border border-primary/30">
                  <Play className="size-10 text-primary fill-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Demo Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { value: "200+", label: "Languages Supported", icon: Globe },
            { value: "10+", label: "Content Types", icon: Video },
            { value: "3", label: "Social Platforms", icon: TrendingUp },
            { value: "∞", label: "Videos Generated", icon: Sparkles },
          ].map((stat, i) => (
            <Card key={i} className="p-6 text-center hover:border-primary/50 transition-all">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="size-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="gap-1.5">
            <Globe className="size-3" />
            Global Reach
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Create Content in Any Language</h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
            Support for 200+ languages with native voice actors and accurate translations
          </p>
        </div>

        <div className="space-y-4">
          <InfiniteCarousel items={languages1} speed={30} />
          <InfiniteCarousel items={languages2} speed={35} reverse />
        </div>
      </section>

      {/* Content Types Bento Grid */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="gap-1.5">
            <Video className="size-3" />
            Unlimited Possibilities
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Create Any Type of Content</h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
            From Reddit stories to gameplay commentary, we've got every niche covered
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Large Featured Card */}
          <Card className="md:col-span-2 md:row-span-2 p-8 hover:border-primary/50 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="size-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Story Videos</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Reddit stories, scary tales, facts, and more. Perfect for engaging audiences with compelling narratives
                over gameplay footage.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <Badge variant="secondary">Reddit Stories</Badge>
                <Badge variant="secondary">Facts</Badge>
                <Badge variant="secondary">AITA</Badge>
              </div>
            </div>
          </Card>

          {/* Regular Cards */}
          <Card className="md:col-span-2 p-6 hover:border-primary/50 transition-all group">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Gamepad2 className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gameplay Videos</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Minecraft parkour, GTA, Subway Surfers - perfect backgrounds for your content
            </p>
          </Card>

          <Card className="md:col-span-1 p-6 hover:border-primary/50 transition-all group">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="size-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Brainrot</h3>
            <p className="text-sm text-muted-foreground">Peter Griffin, Stewie, and more</p>
          </Card>

          <Card className="md:col-span-1 p-6 hover:border-primary/50 transition-all group">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Headphones className="size-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">ASMR</h3>
            <p className="text-sm text-muted-foreground">Relaxing satisfying content</p>
          </Card>

          <Card className="md:col-span-2 p-6 hover:border-primary/50 transition-all group">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Content</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create your own unique style with full customization options
            </p>
          </Card>
        </div>
      </section>

      {/* Platform Support */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Post Everywhere, Automatically</h2>
            <p className="text-muted-foreground text-balance">
              Connect once, post everywhere. AutoClips handles all platforms seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 hover:border-red-500/50 transition-all group">
              <div className="size-16 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <IconBrandYoutube className="size-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">YouTube Shorts</h3>
              <p className="text-muted-foreground mb-6">Reach billions with vertical video content</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Auto-upload</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>SEO optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Analytics tracking</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:border-foreground/50 transition-all group">
              <div className="size-16 rounded-xl bg-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <IconBrandTiktok className="size-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">TikTok</h3>
              <p className="text-muted-foreground mb-6">Viral potential with the world's fastest-growing platform</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Trending hashtags</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Best time posting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Viral algorithms</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:border-pink-500/50 transition-all group">
              <div className="size-16 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <IconBrandInstagram className="size-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instagram Reels</h3>
              <p className="text-muted-foreground mb-6">Engage with a highly active community</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Story integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Explore page boost</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Cross-posting</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Powerful Features, Simple Interface</h2>
            <p className="text-muted-foreground text-balance">Everything you need to automate your content creation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast Generation",
                desc: "Create videos in seconds, not hours. Our AI-powered engine is the fastest in the market.",
              },
              {
                icon: Palette,
                title: "Advanced Customization",
                desc: "Full control over captions, voices, backgrounds, music, colors, and more.",
              },
              {
                icon: Clock,
                title: "Smart Scheduling",
                desc: "Set your posting schedule once and let automation handle the rest forever.",
              },
              {
                icon: BarChart3,
                title: "Deep Analytics",
                desc: "Track performance across all platforms with detailed insights and suggestions.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Invite team members and manage content creation together seamlessly.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Your content is protected with bank-level security and automatic backups.",
              },
              {
                icon: Rocket,
                title: "SEO Optimized",
                desc: "Automatic titles, descriptions, and tags optimized for maximum reach.",
              },
              {
                icon: TrendingUp,
                title: "Trend Detection",
                desc: "Stay ahead with AI-powered trend analysis and content suggestions.",
              },
              {
                icon: Globe,
                title: "Global Support",
                desc: "24/7 customer support in multiple languages to help you succeed.",
              },
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Loved by Creators Worldwide</h2>
            <p className="text-muted-foreground text-balance">Join thousands of successful content creators</p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="size-6 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-balance">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
              </div>
              <div className="flex justify-center gap-2 pt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`size-2 rounded-full transition-all ${
                      i === activeTestimonial ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <Card className="p-8 md:p-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <Badge variant="secondary" className="gap-1.5">
              <Sparkles className="size-3" />
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to Automate Your Content?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Join 10,000+ creators who are growing their audience on autopilot. Start your free 14-day trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2 w-full sm:w-auto text-base h-12 px-8">
                  Start Free Trial
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 bg-transparent">
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">No credit card required • Cancel anytime</p>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="size-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-lg">AutoClips</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The most optimized platform for faceless video automation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-foreground transition-colors">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">© 2025 AutoClips. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="gap-1.5">
                  <Globe className="size-3" />
                  200+ Languages
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
