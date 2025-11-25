"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

interface InfiniteCarouselProps {
  items: Array<{ code: string; name: string }>
  speed?: number
  reverse?: boolean
}

export function InfiniteCarousel({ items, speed = 40, reverse = false }: InfiniteCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollerRef}
        className="flex gap-4 w-max animate-scroll"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((item, i) => (
          <Card key={i} className="p-6 hover:border-primary/50 transition-all cursor-pointer group flex-shrink-0 w-48">
            <div className="text-center space-y-3">
              <div className="text-5xl group-hover:scale-110 transition-transform">{item.code}</div>
              <p className="font-medium">{item.name}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
