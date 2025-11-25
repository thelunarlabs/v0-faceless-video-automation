"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import {
  MessageSquare,
  Gamepad2,
  Brain,
  Headphones,
  TrendingUp,
  Sparkles,
  Video,
  Wand2,
  ArrowRight,
  ChevronLeft,
  Check,
  Loader2,
} from "lucide-react"
import { IconBrandYoutube, IconBrandTiktok, IconBrandInstagram } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

const contentTypes = [
  { id: "story", label: "Story Video", icon: MessageSquare, desc: "Reddit stories, facts, narratives" },
  { id: "gameplay", label: "Gameplay", icon: Gamepad2, desc: "Gaming background footage" },
  { id: "brainrot", label: "Brainrot Talks", icon: Brain, desc: "Character conversations" },
  { id: "asmr", label: "ASMR", icon: Headphones, desc: "Relaxing AI-generated visuals" },
  { id: "motivation", label: "Motivation", icon: TrendingUp, desc: "Inspiring content" },
  { id: "trivia", label: "Trivia", icon: Sparkles, desc: "Fun facts & questions" },
]

const characters = [
  { id: "peter", name: "Peter Griffin", voice: "Deep Comedy" },
  { id: "stewie", name: "Stewie Griffin", voice: "British Child" },
  { id: "rick", name: "Rick Sanchez", voice: "Mad Scientist" },
  { id: "morty", name: "Morty Smith", voice: "Nervous Teen" },
  { id: "spongebob", name: "SpongeBob", voice: "Optimistic" },
  { id: "patrick", name: "Patrick Star", voice: "Dopey" },
]

const gameplayBgs = [
  "Minecraft Parkour",
  "GTA V Driving",
  "Subway Surfers",
  "Temple Run",
  "Satisfying Slime",
  "Custom Upload",
]

export default function GeneratePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState("story")
  const [generating, setGenerating] = useState(false)

  // Brainrot specific
  const [character1, setCharacter1] = useState("peter")
  const [character2, setCharacter2] = useState("stewie")
  const [characterPlacement, setCharacterPlacement] = useState("side-by-side")

  // Story/Content specific
  const [script, setScript] = useState("")
  const [voiceStyle, setVoiceStyle] = useState("male-deep")
  const [backgroundVideo, setBackgroundVideo] = useState("Minecraft Parkour")

  // ASMR specific
  const [aiModel, setAiModel] = useState("veo3")

  // Common settings
  const [captionStyle, setCaptionStyle] = useState("modern")
  const [captionColor, setCaptionColor] = useState("#FFFFFF")
  const [music, setMusic] = useState("suspense")
  const [duration, setDuration] = useState([30])

  // Automation
  const [autoSchedule, setAutoSchedule] = useState(false)
  const [platforms, setPlatforms] = useState<string[]>(["youtube"])

  const handleGenerate = async () => {
    setGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))
    router.push("/library")
  }

  const togglePlatform = (platform: string) => {
    setPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  return (
    <DashboardLayout breadcrumbs={[{ label: "Create Video", href: "/generate" }]}>
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[
            { num: 1, label: "Type" },
            { num: 2, label: "Customize" },
            { num: 3, label: "Automate" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "size-10 rounded-full flex items-center justify-center font-semibold transition-all",
                    step >= s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                  )}
                >
                  {step > s.num ? <Check className="size-5" /> : s.num}
                </div>
                <span
                  className={cn(
                    "font-medium hidden sm:inline",
                    step >= s.num ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </span>
              </div>
              {i < 2 && (
                <div className={cn("h-0.5 flex-1 mx-4 transition-all", step > s.num ? "bg-primary" : "bg-muted")} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Content Type */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-bold mb-2">Choose Your Content Type</h2>
              <p className="text-muted-foreground">What kind of video do you want to create?</p>
            </div>

            <RadioGroup value={selectedType} onValueChange={setSelectedType}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {contentTypes.map((type) => (
                  <label key={type.id} className="cursor-pointer">
                    <RadioGroupItem value={type.id} id={type.id} className="sr-only" />
                    <Card
                      className={cn(
                        "p-6 transition-all hover:border-primary/50 overflow-hidden",
                        selectedType === type.id && "border-primary bg-primary/5 ring-2 ring-primary",
                      )}
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        {/* Cloud background image */}
                        <div className="w-full h-24 rounded-lg mb-2 overflow-hidden flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900">
                          <img
                            src="/clouds-bg.jpg"
                            alt="clouds"
                            className="w-full h-full object-cover opacity-60 dark:opacity-40"
                          />
                        </div>
                        <div
                          className={cn(
                            "size-16 rounded-xl flex items-center justify-center transition-all",
                            selectedType === type.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground",
                          )}
                        >
                          <type.icon className="size-8" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{type.label}</h3>
                          <p className="text-sm text-muted-foreground">{type.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </label>
                ))}
              </div>
            </RadioGroup>

            <div className="flex justify-end">
              <Button size="lg" onClick={() => setStep(2)} className="gap-2">
                Continue to Customize
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Customize Video Elements */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="icon" onClick={() => setStep(1)}>
                <ChevronLeft className="size-5" />
              </Button>
              <div>
                <h2 className="text-2xl font-bold">
                  Customize Your {contentTypes.find((t) => t.id === selectedType)?.label}
                </h2>
                <p className="text-muted-foreground">Fine-tune every element of your video</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Brainrot Specific */}
                {selectedType === "brainrot" && (
                  <>
                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">Select Characters (2 required)</h3>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <Label>Character 1</Label>
                          <Select value={character1} onValueChange={setCharacter1}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {characters.map((char) => (
                                <SelectItem key={char.id} value={char.id}>
                                  {char.name} - {char.voice}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label>Character 2</Label>
                          <Select value={character2} onValueChange={setCharacter2}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {characters
                                .filter((c) => c.id !== character1)
                                .map((char) => (
                                  <SelectItem key={char.id} value={char.id}>
                                    {char.name} - {char.voice}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label>Character Placement</Label>
                          <Select value={characterPlacement} onValueChange={setCharacterPlacement}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="side-by-side">Side by Side</SelectItem>
                              <SelectItem value="top-bottom">Top & Bottom</SelectItem>
                              <SelectItem value="alternating">Alternating</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">Conversation Topic</h3>
                      <Textarea
                        placeholder="e.g., 'Debate about which pizza topping is the best' or 'Discuss the meaning of life'"
                        className="min-h-[120px]"
                        value={script}
                        onChange={(e) => setScript(e.target.value)}
                      />
                    </Card>
                  </>
                )}

                {/* ASMR Specific */}
                {selectedType === "asmr" && (
                  <>
                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">AI Video Model</h3>
                      <div className="space-y-3">
                        <Select value={aiModel} onValueChange={setAiModel}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="veo3">Veo 3 (Google)</SelectItem>
                            <SelectItem value="sora">Sora (OpenAI)</SelectItem>
                            <SelectItem value="runway">Runway Gen-3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">Visual Description</h3>
                      <Textarea
                        placeholder="Describe what you want to see... e.g., 'Gentle rain falling on leaves, close-up shots of water droplets'"
                        className="min-h-[120px]"
                        value={script}
                        onChange={(e) => setScript(e.target.value)}
                      />
                    </Card>
                  </>
                )}

                {/* Story/Gameplay/Other Types */}
                {!["brainrot", "asmr"].includes(selectedType) && (
                  <>
                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">Content Script</h3>
                      <Textarea
                        placeholder="Enter your script or let AI generate one based on your topic..."
                        className="min-h-[150px]"
                        value={script}
                        onChange={(e) => setScript(e.target.value)}
                      />
                      <Button variant="outline" size="sm" className="mt-3 gap-2 bg-transparent">
                        <Wand2 className="size-4" />
                        Generate Script with AI
                      </Button>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">Voice Settings</h3>
                      <div className="space-y-3">
                        <Label>Voice Style</Label>
                        <Select value={voiceStyle} onValueChange={setVoiceStyle}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male-deep">Male - Deep Narration</SelectItem>
                            <SelectItem value="male-casual">Male - Casual</SelectItem>
                            <SelectItem value="female-warm">Female - Warm</SelectItem>
                            <SelectItem value="female-energetic">Female - Energetic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </Card>
                  </>
                )}

                {/* Common Elements */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Background Video</h3>
                  <div className="space-y-3">
                    <Select value={backgroundVideo} onValueChange={setBackgroundVideo}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {gameplayBgs.map((bg) => (
                          <SelectItem key={bg} value={bg}>
                            {bg}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Caption Style</h3>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Label>Style Preset</Label>
                      <Select value={captionStyle} onValueChange={setCaptionStyle}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern">Modern & Clean</SelectItem>
                          <SelectItem value="bold">Bold & Colorful</SelectItem>
                          <SelectItem value="minimal">Minimalist</SelectItem>
                          <SelectItem value="karaoke">Karaoke Style</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Caption Color</Label>
                      <Input
                        type="color"
                        value={captionColor}
                        onChange={(e) => setCaptionColor(e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Background Music</h3>
                  <div className="space-y-3">
                    <Select value={music} onValueChange={setMusic}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suspense">Dark Suspense</SelectItem>
                        <SelectItem value="lofi">Lofi Chill</SelectItem>
                        <SelectItem value="upbeat">Upbeat Pop</SelectItem>
                        <SelectItem value="none">No Music</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </Card>
              </div>

              {/* Preview Sidebar */}
              <div className="space-y-4">
                <Card className="p-6 sticky top-6">
                  <h3 className="font-semibold mb-4">Video Preview</h3>
                  <div className="aspect-[9/16] bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Video className="size-12 text-muted-foreground" />
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-medium capitalize">{selectedType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{duration[0]}s</span>
                    </div>
                    <div className="space-y-3 pt-2">
                      <Label>Target Duration</Label>
                      <Slider value={duration} onValueChange={setDuration} min={15} max={90} step={5} />
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ChevronLeft className="size-5 mr-2" />
                Back
              </Button>
              <Button size="lg" onClick={() => setStep(3)} className="gap-2">
                Continue to Automation
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Automation */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="icon" onClick={() => setStep(2)}>
                <ChevronLeft className="size-5" />
              </Button>
              <div>
                <h2 className="text-2xl font-bold">Automate Your Posting</h2>
                <p className="text-muted-foreground">Set it and forget it</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Select Platforms</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "youtube", name: "YouTube", icon: IconBrandYoutube, color: "text-red-500" },
                    { id: "tiktok", name: "TikTok", icon: IconBrandTiktok, color: "text-foreground" },
                    { id: "instagram", name: "Instagram", icon: IconBrandInstagram, color: "text-pink-500" },
                  ].map((platform) => (
                    <Button
                      key={platform.id}
                      variant={platforms.includes(platform.id) ? "default" : "outline"}
                      className="h-auto flex-col gap-2 py-4"
                      onClick={() => togglePlatform(platform.id)}
                    >
                      <platform.icon className={cn("size-6", !platforms.includes(platform.id) && platform.color)} />
                      <span className="text-xs">{platform.name}</span>
                    </Button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Publishing Options</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      id="now"
                      name="schedule"
                      checked={!autoSchedule}
                      onChange={() => setAutoSchedule(false)}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="now" className="font-medium cursor-pointer">
                        Publish Now
                      </label>
                      <p className="text-sm text-muted-foreground">Generate and publish immediately</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      id="schedule"
                      name="schedule"
                      checked={autoSchedule}
                      onChange={() => setAutoSchedule(true)}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="schedule" className="font-medium cursor-pointer">
                        Schedule Automatically
                      </label>
                      <p className="text-sm text-muted-foreground">Add to your content calendar</p>
                    </div>
                  </div>

                  {autoSchedule && (
                    <Card className="p-4 bg-muted animate-in fade-in duration-200">
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label>Posting Frequency</Label>
                          <Select defaultValue="daily">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="twice-daily">Twice Daily</SelectItem>
                              <SelectItem value="every-other">Every Other Day</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Preferred Time</Label>
                          <Input type="time" defaultValue="18:00" />
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              </Card>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  <ChevronLeft className="size-5 mr-2" />
                  Back
                </Button>
                <Button size="lg" className="flex-1 gap-2" onClick={handleGenerate} disabled={generating}>
                  {generating ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="size-5" />
                      Generate Video
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">Estimated generation time: ~2-3 minutes</p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
