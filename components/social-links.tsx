import Link from "next/link"
import { Instagram, TwitterIcon as TikTok } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-950 text-white p-3 rounded-full hover:bg-teal-700 transition-colors"
      >
        <Instagram className="h-6 w-6" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-950 text-white p-3 rounded-full hover:bg-teal-700 transition-colors"
      >
        <TikTok className="h-6 w-6" />
        <span className="sr-only">TikTok</span>
      </Link>
    </div>
  )
}
