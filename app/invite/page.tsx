"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Copy, Mail, Users, Check, DollarSign, Award } from "lucide-react"
import { IconBrandTwitter, IconBrandFacebook, IconBrandWhatsapp } from "@tabler/icons-react"

export default function InvitePage() {
  const [copied, setCopied] = useState(false)
  const inviteLink = "https://autoclips.ai/affiliate/johndoe123"

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const affiliateStats = [
    { email: "alice@example.com", signups: 5, earnings: "$45", date: "Dec 10, 2024" },
    { email: "bob@example.com", signups: 3, earnings: "$27", date: "Dec 15, 2024" },
    { email: "charlie@example.com", signups: 8, earnings: "$72", date: "Dec 18, 2024" },
  ]

  return (
    <DashboardLayout breadcrumbs={[{ label: "Affiliate Program" }]}>
      <div className="max-w-4xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Affiliate & Rewards</h1>
          <p className="text-muted-foreground">Earn money and rewards by sharing AutoClips with your audience</p>
        </div>

        {/* Rewards Banner */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-background border-primary/20">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <DollarSign className="size-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-1">Earn 30% Commission on Every Sale</h2>
              <p className="text-sm text-muted-foreground mb-4">
                For every person who subscribes using your affiliate link, you'll earn 30% recurring commission for 12
                months!
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-primary" />
                  <span className="text-sm font-medium">16 referrals</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="size-4 text-primary" />
                  <span className="text-sm font-medium">$144 earned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-primary" />
                  <span className="text-sm font-medium">Top 10% Affiliate</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Affiliate Link */}
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Your Affiliate Link</h3>
              <p className="text-sm text-muted-foreground">Share this link with your audience to start earning</p>
            </div>

            <div className="flex gap-2">
              <Input value={inviteLink} readOnly className="font-mono text-sm" />
              <Button onClick={handleCopy} className="shrink-0">
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        </Card>

        {/* Share Options */}
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Share via Social Media</h3>
              <p className="text-sm text-muted-foreground">Spread the word on your favorite platforms</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="gap-2 bg-transparent">
                <IconBrandTwitter className="size-4" />
                Twitter
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <IconBrandFacebook className="size-4" />
                Facebook
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <IconBrandWhatsapp className="size-4" />
                WhatsApp
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Mail className="size-4" />
                Email
              </Button>
            </div>
          </div>
        </Card>

        {/* Affiliate Stats */}
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Affiliate Performance</h3>
              <p className="text-sm text-muted-foreground">Track your referrals and earnings</p>
            </div>

            <div className="space-y-3">
              {affiliateStats.map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div>
                    <p className="font-medium">{stat.email}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.date} • {stat.signups} signups
                    </p>
                  </div>
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                    {stat.earnings}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
