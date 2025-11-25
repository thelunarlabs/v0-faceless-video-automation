"use client"

import { useRef } from "react"

interface VideoItem {
  id: string
  url: string
  thumbnail?: string
}

interface VerticalVideoCarouselProps {
  videos: VideoItem[]
  direction?: "up" | "down"
  speed?: number
  className?: string
}

export function VerticalVideoCarousel({
  videos,
  direction = "down",
  speed = 30,
  className = "",
}: VerticalVideoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...videos, ...videos, ...videos]

  return (
    <div className={`relative h-full overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="flex flex-col gap-4"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedVideos.map((video, index) => (
          <div
            key={`${video.id}-${index}`}
            className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden border border-border/30 shadow-lg bg-muted/20 flex-shrink-0 group"
          >
            <video
              src={video.url}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100% / 3));
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(calc(-100% / 3));
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
