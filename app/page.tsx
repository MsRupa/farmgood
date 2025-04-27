import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import BrandCard from "@/components/brand-card"
import ProductCard from "@/components/product-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://i.ibb.co/Wv35K699/farmgoodhero.png"
            alt="Farm landscape with fresh produce"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Nature's Finest Brands, Fresh from the Farms
          </h1>
          <p className="mb-8 max-w-2xl text-lg sm:text-xl">
            Discover premium products from India's heartlands — Dry Fruits, Honey, Nolen Gur, and more.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-[#A8D5BA] hover:bg-[#8D6748] text-white">
              <Link href="/brands">Explore Our Brands</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white/20"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-6">Welcome to FarmGood</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              At FarmGood, we bridge the gap between India's finest farms and quality-conscious consumers. We curate
              premium agricultural products, maintaining their natural goodness while ensuring sustainable practices and
              supporting local farmers.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-[#8D6748] dark:text-[#A8D5BA] hover:underline font-medium"
            >
              Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-16 bg-[#FAF9F6] dark:bg-[#0D1F1A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Brands</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Discover our family of premium brands, each dedicated to bringing you the finest natural products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BrandCard
              name="DryRich"
              description="Premium handpicked dry fruits from the finest orchards of India."
              imageSrc="/placeholder.svg?height=400&width=600"
              href="/brands/dryrich"
            />
            <BrandCard
              name="Sundarban Honey"
              description="Pure, raw honey collected from the pristine mangrove forests of Sundarbans."
              imageSrc="/placeholder.svg?height=400&width=600"
              href="/brands/sundarban-honey"
            />
            <BrandCard
              name="Nolen Gur"
              description="Traditional date palm jaggery, a winter delicacy from Bengal's countryside."
              imageSrc="/placeholder.svg?height=400&width=600"
              href="/brands/nolen-gur"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-[#A8D5BA] hover:bg-[#8D6748] text-white">
              <Link href="/brands">View All Brands</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Featured Products</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              A selection of our finest offerings from across our brands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              name="Premium Kashmiri Almonds"
              description="Hand-selected, premium quality almonds from the valleys of Kashmir."
              imageSrc="/placeholder.svg?height=400&width=600"
              brand="DryRich"
              href="/products/kashmiri-almonds"
              buyHref="https://dryrich.com/products/kashmiri-almonds"
            />
            <ProductCard
              name="Wild Forest Honey"
              description="Raw, unprocessed honey collected from the depths of Sundarban forests."
              imageSrc="/placeholder.svg?height=400&width=600"
              brand="Sundarban Honey"
              href="/products/wild-forest-honey"
              buyHref="https://sundarbanhoney.com/products/wild-forest-honey"
            />
            <ProductCard
              name="Artisanal Nolen Gur"
              description="Traditional date palm jaggery made using age-old techniques."
              imageSrc="/placeholder.svg?height=400&width=600"
              brand="Nolen Gur"
              href="/products/artisanal-nolen-gur"
              buyHref="https://nolengur.com/products/artisanal-nolen-gur"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-[#A8D5BA] hover:bg-[#8D6748] text-white">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#FAF9F6] dark:bg-[#0D1F1A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Why Choose FarmGood</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Our commitment to quality, sustainability, and community sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#0D1F1A]/50 p-8 rounded-2xl shadow-md transition-transform hover:scale-105">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mb-4">
                <Leaf className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">100% Natural Products</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We ensure all our products maintain their natural goodness without any artificial additives or
                preservatives.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1F1A]/50 p-8 rounded-2xl shadow-md transition-transform hover:scale-105">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mb-4">
                <Shield className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rigorous quality checks at every stage ensure that only the finest products reach your doorstep.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1F1A]/50 p-8 rounded-2xl shadow-md transition-transform hover:scale-105">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mb-4">
                <Users className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Farmer Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work directly with local farmers, ensuring fair compensation and sustainable farming practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Hear from those who have experienced the FarmGood difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The quality of DryRich almonds is unmatched. You can taste the difference in every bite!"
              author="Priya Sharma"
              location="Mumbai"
            />
            <TestimonialCard
              quote="Sundarban Honey has become a staple in our household. Pure, raw, and absolutely delicious."
              author="Rajesh Patel"
              location="Delhi"
            />
            <TestimonialCard
              quote="As a Bengali living abroad, Nolen Gur brings back memories of home. Authentic taste and excellent quality."
              author="Ananya Das"
              location="Kolkata"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#A8D5BA]/20 dark:bg-[#0D1F1A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-6">
              Experience the Goodness of Nature
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Discover our premium brands and bring the freshness of farms to your table.
            </p>
            <Button asChild size="lg" className="bg-[#8D6748] hover:bg-[#A8D5BA] text-white">
              <Link href="/brands">Explore Our Brands</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
