"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Eye, Heart, MessageCircle, UserPlus } from "lucide-react"
import { IconBrandInstagram } from "@tabler/icons-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts"

const viewsData = [
  { name: "Mon", Views: 2100, Likes: 320, Comments: 45 },
  { name: "Tue", Views: 2400, Likes: 380, Comments: 52 },
  { name: "Wed", Views: 2200, Likes: 350, Comments: 48 },
  { name: "Thu", Views: 2800, Likes: 450, Comments: 60 },
  { name: "Fri", Views: 3200, Likes: 520, Comments: 72 },
  { name: "Sat", Views: 3800, Likes: 580, Comments: 85 },
  { name: "Sun", Views: 3500, Likes: 540, Comments: 78 },
]

export default function InstagramAnalyticsPage() {
  const stats = [
    {
      label: "Total Views",
      value: "14.7K",
      change: "+8.3%",
      icon: Eye,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      label: "Total Likes",
      value: "3.2K",
      change: "+12.1%",
      icon: Heart,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      label: "Comments",
      value: "440",
      change: "+6.8%",
      icon: MessageCircle,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      label: "New Followers",
      value: "+320",
      change: "+18.4%",
      icon: UserPlus,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
  ]

  return (
    <DashboardLayout breadcrumbs={[{ label: "Analytics", href: "/analytics" }, { label: "Instagram" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-lg bg-pink-500/10 flex items-center justify-center">
            <IconBrandInstagram className="size-7 text-pink-500" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Instagram Reels</h1>
            <p className="text-muted-foreground">Performance metrics for Instagram</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-3">
                <div className={`size-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`size-5 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-green-500 bg-green-500/10 border-green-500/20">
                  <TrendingUp className="size-3 mr-1" />
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

        {/* Performance Chart */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Instagram Performance</h2>
            <p className="text-sm text-muted-foreground">Last 7 days metrics</p>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="Views" fill="#ec4899" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Likes" fill="#f472b6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Comments" fill="#fb7185" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </DashboardLayout>
  )
}
