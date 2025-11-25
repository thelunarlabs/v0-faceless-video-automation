"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Share2, Trash2, MoreVertical, Play, Clock, CheckCircle2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const videos = [
  {
    id: 1,
    title: "Subway Surfers Story #42",
    type: "Story",
    status: "Published",
    views: "12.4K",
    date: "2 hours ago",
    thumbnail: "/subway-surfers.jpg",
  },
  {
    id: 2,
    title: "Minecraft Parkour Facts",
    type: "Gameplay",
    status: "Scheduled",
    views: "—",
    date: "Today 6:00 PM",
    thumbnail: "/minecraft-parkour.jpg",
  },
  {
    id: 3,
    title: "Peter Griffin Roasts",
    type: "Brainrot",
    status: "Published",
    views: "8.9K",
    date: "1 day ago",
    thumbnail: "/peter-griffin.jpg",
  },
  {
    id: 4,
    title: "ASMR Slime Sounds",
    type: "ASMR",
    status: "Draft",
    views: "—",
    date: "Yesterday",
    thumbnail: "/asmr-slime.jpg",
  },
  {
    id: 5,
    title: "Reddit Horror Story #23",
    type: "Story",
    status: "Published",
    views: "15.2K",
    date: "3 days ago",
    thumbnail: "/horror-story.jpg",
  },
  {
    id: 6,
    title: "Fortnite Victory Tips",
    type: "Gameplay",
    status: "Published",
    views: "6.7K",
    date: "4 days ago",
    thumbnail: "/generic-battle-royale.png",
  },
]

export default function LibraryPage() {
  const [filter, setFilter] = useState("all")

  return (
    <DashboardLayout breadcrumbs={[{ label: "Library", href: "/library" }]}>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold">Content Library</h1>
            <p className="text-muted-foreground">Manage your generated videos</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search videos..." className="pl-9" />
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Videos</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="draft">Drafts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden group hover:shadow-lg transition-all border-border/60">
              <div className="relative aspect-[9/16] bg-muted group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                  <Button
                    size="icon"
                    className="rounded-full size-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm border-0"
                  >
                    <Play className="size-6 text-white ml-1" />
                  </Button>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge
                    className="backdrop-blur-md shadow-sm"
                    variant={
                      video.status === "Published" ? "default" : video.status === "Scheduled" ? "secondary" : "outline"
                    }
                  >
                    {video.status}
                  </Badge>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold truncate leading-tight">{video.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-[10px] px-1.5 h-5">
                      {video.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="size-3" /> {video.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <span className="text-xs font-medium flex items-center gap-1.5">
                    {video.status === "Published" && <CheckCircle2 className="size-3 text-green-500" />}
                    {video.views} views
                  </span>

                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="size-7">
                      <Share2 className="size-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-7">
                      <Download className="size-3.5" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-7">
                          <MoreVertical className="size-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="size-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
