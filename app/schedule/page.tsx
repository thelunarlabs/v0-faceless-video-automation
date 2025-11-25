"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video } from "lucide-react"
import { IconBrandYoutube, IconBrandTiktok, IconBrandInstagram } from "@tabler/icons-react"

const scheduledEvents = [
  { date: new Date(2025, 0, 15), title: "Minecraft Facts", platform: "YouTube" },
  { date: new Date(2025, 0, 15), title: "Story #42", platform: "TikTok" },
  { date: new Date(2025, 0, 16), title: "ASMR Nature", platform: "Instagram" },
  { date: new Date(2025, 0, 17), title: "Horror Story", platform: "YouTube" },
  { date: new Date(2025, 0, 18), title: "Gameplay Clips", platform: "TikTok" },
  { date: new Date(2025, 0, 20), title: "Brainrot Talk", platform: "YouTube" },
  { date: new Date(2025, 0, 22), title: "Story Time", platform: "Instagram" },
  { date: new Date(2025, 0, 25), title: "Facts Video", platform: "TikTok" },
]

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const getEventsForDate = (date: Date | undefined) => {
    if (!date) return []
    return scheduledEvents.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : []

  return (
    <DashboardLayout breadcrumbs={[{ label: "Schedule" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Content Calendar</h1>
          <p className="text-muted-foreground">View and manage your scheduled videos</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Calendar */}
          <Card className="lg:col-span-2 p-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md w-full"
              modifiers={{
                hasEvents: scheduledEvents.map((e) => e.date),
              }}
              modifiersClassNames={{
                hasEvents: "bg-primary/10 font-semibold",
              }}
            />
          </Card>

          {/* Event Details Sidebar */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })
                : "No date selected"}
            </h3>
            {selectedEvents.length > 0 ? (
              <div className="space-y-3">
                {selectedEvents.map((event, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <div className="size-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Video className="size-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{event.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {event.platform === "YouTube" && (
                            <Badge variant="outline" className="text-xs gap-1">
                              <IconBrandYoutube className="size-3 text-red-500" />
                              YouTube
                            </Badge>
                          )}
                          {event.platform === "TikTok" && (
                            <Badge variant="outline" className="text-xs gap-1">
                              <IconBrandTiktok className="size-3" />
                              TikTok
                            </Badge>
                          )}
                          {event.platform === "Instagram" && (
                            <Badge variant="outline" className="text-xs gap-1">
                              <IconBrandInstagram className="size-3 text-pink-500" />
                              Instagram
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No videos scheduled for this day</p>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
