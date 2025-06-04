import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"
import { GalleryGrid } from "@/components/gallery-grid"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-teal-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749064758/ali-pazani-3w14X-Yxffk-unsplash_pzjktu.jpg"
            alt="Hairstyling background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-4">
            Styled <span className="italic">for</span> Life
          </h1>
          <p className="text-lg md:text-xl max-w-md mx-auto mb-8">Boutique hairdressing built for you.</p>
          {/* <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-teal-950 transition-colors"
          >
            <Link href="#portfolio">View Portfolio</Link>
          </Button> */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
            About <span className="italic">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                I've been training for a well-known company, GHD. I'm a professional hairdresser and currently I'm
                applying to become a hairdressing teacher. I don't have a business, but I want to include my experience
                and videos in my portfolio, which I need to present at my upcoming exam.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                With over 5 years of experience in the industry, I've developed expertise in various cutting and
                coloring techniques, specializing in creating personalized styles that enhance each client's unique
                features.
              </p>
              <Button className="bg-teal-800 hover:bg-teal-900 text-white">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749065644/IMG_7822_sphigr.png"
                alt="Hairdresser at work"
                width={400}
                height={600}
                className="rounded-lg object-cover h-full w-full"
              />
              <Image
                src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749065643/IMG_7824_j47mo9.jpg"
                alt="Hairstyle example"
                width={400}
                height={600}
                className="rounded-lg object-cover h-full w-full mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
            The <span className="italic">Portfolio</span>
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="haircuts">Haircuts</TabsTrigger>
              <TabsTrigger value="coloring">Coloring</TabsTrigger>
              <TabsTrigger value="styling">Styling</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <GalleryGrid category="all" />
            </TabsContent>
            <TabsContent value="haircuts">
              <GalleryGrid category="haircuts" />
            </TabsContent>
            <TabsContent value="coloring">
              <GalleryGrid category="coloring" />
            </TabsContent>
            <TabsContent value="styling">
              <GalleryGrid category="styling" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Social & Contact Section */}
      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
            Connect <span className="italic">with</span> Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-6">Social Media</h3>
              <p className="text-gray-700 mb-8">
                Follow me on social media to see my latest work, behind-the-scenes content, and hairstyling tips.
              </p>
              <SocialLinks />
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-6">Get in Touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:underline">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Haircuts & Styling</li>
                <li>Color & Highlights</li>
                <li>Hair Treatments</li>
                <li>Bridal & Special Events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe for hairstyling tips and updates</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none"
                />
                <Button className="rounded-l-none bg-teal-800 hover:bg-teal-700">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-teal-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Hairdresser Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
