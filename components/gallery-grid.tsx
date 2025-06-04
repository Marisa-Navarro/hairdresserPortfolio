"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play } from "lucide-react"

// Mock data for the gallery
const galleryItems = [
  {
    id: 1,
    title: "Modern Bob Cut",
    category: "haircuts",
    type: "image",
    src: "/placeholder.svg?height=600&width=400",
    alt: "Modern bob haircut",
  },
  {
    id: 2,
    title: "Balayage Highlights",
    category: "coloring",
    type: "image",
    src: "/placeholder.svg?height=600&width=400",
    alt: "Balayage highlights",
  },
  {
    id: 3,
    title: "Wedding Updo",
    category: "styling",
    type: "image",
    src: "/placeholder.svg?height=600&width=400",
    alt: "Wedding updo hairstyle",
  },
  {
    id: 4,
    title: "Pixie Cut Tutorial",
    category: "haircuts",
    type: "video",
    src: "/placeholder.svg?height=600&width=400",
    alt: "Pixie cut tutorial",
  },
  {
    id: 5,
    title: "Ombre Coloring",
    category: "coloring",
    type: "image",
    src: "/placeholder.svg?height=600&width=400",
    alt: "Ombre hair coloring",
  },
  {
    id: 6,
    title: "Men's Fade",
    category: "haircuts",
    type: "image",
    src: "/placeholder.svg?height=600&width=400",
    alt: "Men's fade haircut",
  },
  {
    id: 7,
    title: "Blow Dry Technique",
    category: "styling",
    type: "video",
    src: "/placeholder.svg?height=600&width=400",
    alt: "Blow dry styling technique",
  },
  {
    id: 8,
    title: "Platinum Blonde",
    category: "coloring",
    type: "image",
    src: "/placeholder.svg?height=600&width=400",
    alt: "Platinum blonde hair color",
  },
]

type GalleryGridProps = {
  category: string
}

export function GalleryGrid({ category }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems = category === "all" ? galleryItems : galleryItems.filter((item) => item.category === category)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden"
            onClick={() => setSelectedItem(item)}
          >
            <div className="aspect-[3/4] relative">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/30 backdrop-blur-sm rounded-full p-3">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm capitalize">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl">
          {selectedItem?.type === "image" ? (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedItem.src || "/placeholder.svg"}
                alt={selectedItem.alt}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <Play className="h-16 w-16 text-white opacity-50" />
              <p className="absolute bottom-4 text-white">Video would play here</p>
            </div>
          )}
          <div className="mt-2">
            <h2 className="text-xl font-medium">{selectedItem?.title}</h2>
            <p className="text-gray-500 capitalize">{selectedItem?.category}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
