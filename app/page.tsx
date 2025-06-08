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
      <section className="relative h-screen  text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749375940/IMG_7826_quy47i.jpg"
            alt="Hairstyling background"
            fill
            className="object-cover "
            priority
          />
        </div>
        <div className="relative z-10 flex h-full  flex-col items-center justify-center text-center px-4">
          {/* <div className="relative backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-8 shadow-lg">
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-4">
              Styled <span className="italic">for</span> Life
            </h1>
            <p className="text-lg md:text-xl max-w-md mx-auto ">
              Boutique hairdressing built for you.
            </p>
          </div> */}
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
              <Button className="bg-gray-950 hover:bg-teal-900 text-white">
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
          <Tabs defaultValue="Formaciones y Seminarios" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-[170px] bg-transparent gap-32">
              <TabsTrigger value="Formaciones y Seminarios" className="flex flex-col items-center data-[state=active]:bg-transparent">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2 border-2 border-transparent transition-colors data-[state=active]:border-teal-600">
                  <Image
                    src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749404018/1_1_ycnu44.jpg"
                    alt="All services"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">Formaciones y Seminarios</span>
              </TabsTrigger>

              <TabsTrigger value="Directos" className="flex flex-col items-center data-[state=active]:bg-transparent">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2 border-2 border-transparent transition-colors data-[state=active]:border-teal-600">
                  <Image
                    src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749399190/2_t0noqf.jpg"
                    alt="Haircuts"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">Directos</span>
              </TabsTrigger>

              <TabsTrigger value="Vídeos educativos" className="flex flex-col items-center data-[state=active]:bg-transparent">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2 border-2 border-transparent transition-colors data-[state=active]:border-teal-600">
                  <Image
                    src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749399190/3_vmpyf2.jpg"
                    alt="Coloring"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">Vídeos educativos</span>
              </TabsTrigger>

              <TabsTrigger value="Eventos" className="flex flex-col items-center data-[state=active]:bg-transparent">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2 border-2 border-transparent transition-colors data-[state=active]:border-teal-600">
                  <Image
                    src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749404021/4_1_o0pwxy.jpg"
                    alt="Styling"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">Eventos</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="Formaciones y Seminarios">
              <GalleryGrid category="Formaciones y Seminarios" />
            </TabsContent>
            <TabsContent value="Directos">
              <GalleryGrid category="Directos" />
            </TabsContent>
            <TabsContent value="Vídeos educativos">
              <GalleryGrid category="Vídeos educativos" />
            </TabsContent>
            <TabsContent value="Eventos">
              <GalleryGrid category="Eventos" />
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
               <Image
                src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749379713/IMG_7825_lgpgix.jpg"
                alt="Hairdresser at work"
                width={600}
                height={400}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="https://res.cloudinary.com/deq6qm96r/image/upload/v1749101918/Marisa_Navarro_Logo_white_lcxu0y.png"
                alt="Marisa Navarro Logo"
                width={150}
                height={60}
                className="mb-4"
              />
              <p className="text-gray-400 mt-4">
                Professional hairdresser and educator passionate about creating beautiful styles and sharing knowledge.
              </p>
            </div>
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
          </div>
          <div className="border-t border-teal-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Marisa Navarro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
