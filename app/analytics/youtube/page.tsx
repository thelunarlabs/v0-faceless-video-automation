"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Eye, ThumbsUp, MessageSquare, UserPlus } from "lucide-react"
import { IconBrandYoutube } from "@tabler/icons-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts"

const viewsData = [
  { name: "Mon", Views: 4200, Likes: 580, Comments: 125 },
  { name: "Tue", Views: 5100, Likes: 720, Comments: 145 },
  { name: "Wed", Views: 4800, Likes: 650, Comments: 130 },
  { name: "Thu", Views: 6200, Likes: 890, Comments: 180 },
  { name: "Fri", Views: 7100, Likes: 980, Comments: 210 },
  { name: "Sat", Views: 8200, Likes: 1150, Comments: 245 },
  { name: "Sun", Views: 7500, Likes: 1050, Comments: 220 },
]

export default function YouTubeAnalyticsPage() {
  const stats = [
    {
      label: "Total Views",
      value: "45.2K",
      change: "+12.4%",
      icon: Eye,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      label: "Total Likes",
      value: "6.0K",
      change: "+15.7%",
      icon: ThumbsUp,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      label: "Comments",
      value: "1.3K",
      change: "+8.9%",
      icon: MessageSquare,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      label: "New Subscribers",
      value: "+540",
      change: "+22.1%",
      icon: UserPlus,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ]

  return (
    <DashboardLayout breadcrumbs={[{ label: "Analytics", href: "/analytics" }, { label: "YouTube" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-lg bg-red-500/10 flex items-center justify-center">
            <IconBrandYoutube className="size-7 text-red-500" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">YouTube Shorts</h1>
            <p className="text-muted-foreground">Performance metrics for YouTube</p>
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
            <h2 className="text-lg font-semibold mb-1">YouTube Performance</h2>
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
              <Bar dataKey="Views" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Likes" fill="#f87171" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Comments" fill="#fca5a5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </DashboardLayout>
  )
}
