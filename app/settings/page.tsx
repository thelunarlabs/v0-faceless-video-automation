import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { User, CreditCard, Key, LogOut, Bell, Shield } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <DashboardLayout breadcrumbs={[{ label: "Settings" }]}>
      <div className="max-w-3xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Account */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">Account</h2>
              <p className="text-sm text-muted-foreground">Update your profile information</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>

            <Button>Save Changes</Button>
          </div>
        </Card>

        {/* Subscription */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <CreditCard className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">Subscription</h2>
              <p className="text-sm text-muted-foreground">Manage your billing and plan</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">Pro Plan</span>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">$29/month • Renews on Jan 15, 2025</p>
              </div>
              <Button variant="outline" size="sm">
                Manage Plan
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Videos per month</p>
                <p className="text-2xl font-bold">100</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Used this month</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bell className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">Notifications</h2>
              <p className="text-sm text-muted-foreground">Manage notification preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Video generation alerts</p>
                <p className="text-sm text-muted-foreground">Notify when videos are ready</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Scheduling reminders</p>
                <p className="text-sm text-muted-foreground">Get reminders before posts go live</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Connected Accounts */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Key className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">Connected Accounts</h2>
              <p className="text-sm text-muted-foreground">Link your social media platforms</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: "YouTube", connected: true },
              { name: "TikTok", connected: true },
              { name: "Instagram", connected: false },
            ].map((platform) => (
              <div
                key={platform.name}
                className="flex items-center justify-between p-4 rounded-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-muted" />
                  <span className="font-medium">{platform.name}</span>
                </div>
                <Button variant={platform.connected ? "outline" : "default"} size="sm">
                  {platform.connected ? "Disconnect" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">Security</h2>
              <p className="text-sm text-muted-foreground">Manage your password and security</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <Button>Update Password</Button>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 border-destructive/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <LogOut className="size-5 text-destructive" />
            </div>
            <div>
              <h2 className="font-semibold">Danger Zone</h2>
              <p className="text-sm text-muted-foreground">Irreversible actions</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full bg-transparent">
              Log Out
            </Button>
            <Button variant="destructive" className="w-full">
              Delete Account
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
