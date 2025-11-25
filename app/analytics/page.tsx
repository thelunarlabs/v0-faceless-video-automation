"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Eye, Heart, Share2, Users } from "lucide-react"
import { IconBrandYoutube, IconBrandTiktok, IconBrandInstagram } from "@tabler/icons-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts"

const viewsData = [
  { name: "Mon", YouTube: 4200, TikTok: 8900, Instagram: 2100 },
  { name: "Tue", YouTube: 5100, TikTok: 9200, Instagram: 2400 },
  { name: "Wed", YouTube: 4800, TikTok: 8500, Instagram: 2200 },
  { name: "Thu", YouTube: 6200, TikTok: 10100, Instagram: 2800 },
  { name: "Fri", YouTube: 7100, TikTok: 12400, Instagram: 3200 },
  { name: "Sat", YouTube: 8200, TikTok: 14200, Instagram: 3800 },
  { name: "Sun", YouTube: 7500, TikTok: 13100, Instagram: 3500 },
]

const engagementData = [
  { name: "Mon", Likes: 320, Shares: 180, Comments: 95 },
  { name: "Tue", Likes: 380, Shares: 210, Comments: 110 },
  { name: "Wed", Likes: 350, Shares: 190, Comments: 100 },
  { name: "Thu", Likes: 450, Shares: 240, Comments: 130 },
  { name: "Fri", Likes: 520, Shares: 280, Comments: 150 },
  { name: "Sat", Likes: 580, Shares: 310, Comments: 170 },
  { name: "Sun", Likes: 540, Shares: 290, Comments: 160 },
]

export default function AnalyticsPage() {
  const stats = [
    {
      label: "Total Views",
      value: "142.3K",
      change: "+12.5%",
      trending: "up",
      icon: Eye,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Total Likes",
      value: "18.2K",
      change: "+8.3%",
      trending: "up",
      icon: Heart,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      label: "Total Shares",
      value: "4.1K",
      change: "+15.7%",
      trending: "up",
      icon: Share2,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      label: "Followers Gained",
      value: "+2.4K",
      change: "-2.1%",
      trending: "down",
      icon: Users,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ]

  const platformStats = [
    {
      platform: "YouTube Shorts",
      icon: IconBrandYoutube,
      iconColor: "text-red-500",
      iconBg: "bg-red-500/10",
      views: "45.2K",
      engagement: "12.8%",
      growth: "+12%",
    },
    {
      platform: "TikTok",
      icon: IconBrandTiktok,
      iconColor: "text-foreground",
      iconBg: "bg-foreground/10",
      views: "82.1K",
      engagement: "18.4%",
      growth: "+28%",
    },
    {
      platform: "Instagram Reels",
      icon: IconBrandInstagram,
      iconColor: "text-pink-500",
      iconBg: "bg-pink-500/10",
      views: "14.7K",
      engagement: "15.2%",
      growth: "+8%",
    },
  ]

  return (
    <DashboardLayout breadcrumbs={[{ label: "Analytics" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track your performance across all platforms</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-3">
                <div className={`size-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`size-5 ${stat.color}`} />
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    stat.trending === "up"
                      ? "text-green-500 bg-green-500/10 border-green-500/20"
                      : "text-red-500 bg-red-500/10 border-red-500/20"
                  }`}
                >
                  {stat.trending === "up" ? (
                    <TrendingUp className="size-3 mr-1" />
                  ) : (
                    <TrendingDown className="size-3 mr-1" />
                  )}
                  {stat.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Platform Performance Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {platformStats.map((platform, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`size-10 rounded-lg ${platform.iconBg} flex items-center justify-center`}>
                  <platform.icon className={`size-6 ${platform.iconColor}`} />
                </div>
                <h3 className="font-semibold">{platform.platform}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Views</span>
                  <span className="text-lg font-bold">{platform.views}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Engagement</span>
                  <span className="text-lg font-bold">{platform.engagement}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Growth</span>
                  <Badge variant="outline" className="text-green-500 bg-green-500/10 border-green-500/20">
                    {platform.growth}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Views Chart */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Views by Platform</h2>
            <p className="text-sm text-muted-foreground">Last 7 days performance</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--card-foreground))",
                }}
                cursor={{ fill: "hsl(var(--muted))" }}
              />
              <Legend wrapperStyle={{ color: "hsl(var(--foreground))" }} />
              <Bar dataKey="YouTube" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="TikTok" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Instagram" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Engagement Chart */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Engagement Metrics</h2>
            <p className="text-sm text-muted-foreground">Likes, shares, and comments</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--card-foreground))",
                }}
                cursor={{ fill: "hsl(var(--muted))" }}
              />
              <Legend wrapperStyle={{ color: "hsl(var(--foreground))" }} />
              <Bar dataKey="Likes" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Shares" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Comments" fill="#a855f7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </DashboardLayout>
  )
}
