"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Eye, Heart, Share2, UserPlus } from "lucide-react"
import { IconBrandTiktok } from "@tabler/icons-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts"

const viewsData = [
  { name: "Mon", Views: 8900, Likes: 1200, Shares: 450 },
  { name: "Tue", Views: 9200, Likes: 1350, Shares: 480 },
  { name: "Wed", Views: 8500, Likes: 1100, Shares: 420 },
  { name: "Thu", Views: 10100, Likes: 1450, Shares: 550 },
  { name: "Fri", Views: 12400, Likes: 1800, Shares: 680 },
  { name: "Sat", Views: 14200, Likes: 2100, Shares: 780 },
  { name: "Sun", Views: 13100, Likes: 1900, Shares: 720 },
]

export default function TikTokAnalyticsPage() {
  const stats = [
    {
      label: "Total Views",
      value: "82.1K",
      change: "+28.4%",
      icon: Eye,
      color: "text-foreground",
      bg: "bg-foreground/10",
    },
    {
      label: "Total Likes",
      value: "10.9K",
      change: "+32.5%",
      icon: Heart,
      color: "text-foreground",
      bg: "bg-foreground/10",
    },
    {
      label: "Total Shares",
      value: "4.1K",
      change: "+24.8%",
      icon: Share2,
      color: "text-foreground",
      bg: "bg-foreground/10",
    },
    {
      label: "New Followers",
      value: "+1.8K",
      change: "+41.2%",
      icon: UserPlus,
      color: "text-foreground",
      bg: "bg-foreground/10",
    },
  ]

  return (
    <DashboardLayout breadcrumbs={[{ label: "Analytics", href: "/analytics" }, { label: "TikTok" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-lg bg-foreground/10 flex items-center justify-center">
            <IconBrandTiktok className="size-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">TikTok</h1>
            <p className="text-muted-foreground">Performance metrics for TikTok</p>
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
            <h2 className="text-lg font-semibold mb-1">TikTok Performance</h2>
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
              <Bar dataKey="Views" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Likes" fill="#6b7280" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Shares" fill="#9ca3af" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </DashboardLayout>
  )
}
