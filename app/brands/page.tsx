import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Brand {
  id: string
  name: string
  description: string
  longDescription: string
  imageSrc: string
  products: string[]
}

const brands: Brand[] = [
  {
    id: "dryrich",
    name: "DryRich",
    description: "Premium handpicked dry fruits from the finest orchards of India.",
    longDescription:
      "DryRich brings you the finest selection of premium dry fruits, carefully handpicked from the best orchards across India. From the valleys of Kashmir to the hills of Himachal, we source directly from farmers who practice traditional cultivation methods that preserve the natural flavor and nutritional value of each nut and fruit. Our rigorous quality control ensures that only the best make it to your table.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    products: [
      "Premium Kashmiri Almonds",
      "Organic Walnuts",
      "Golden Raisins",
      "Dried Apricots",
      "Mixed Dry Fruits Gift Box",
    ],
  },
  {
    id: "sundarban-honey",
    name: "Sundarban Honey",
    description: "Pure, raw honey collected from the pristine mangrove forests of Sundarbans.",
    longDescription:
      "Sundarban Honey offers pure, raw, and unprocessed honey collected from the pristine mangrove forests of the Sundarbans. Our honey harvesters use traditional methods that have been passed down through generations, ensuring minimal intervention and maximum preservation of the honey's natural properties. Each batch is tested for purity and quality, bringing you the authentic taste of wildflowers and the natural goodness of one of the world's most unique ecosystems.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    products: [
      "Wild Forest Honey",
      "Mangrove Blossom Honey",
      "Royal Honey with Honeycomb",
      "Organic Honey Gift Set",
      "Honey with Herbs",
    ],
  },
  {
    id: "nolen-gur",
    name: "Nolen Gur",
    description: "Traditional date palm jaggery, a winter delicacy from Bengal's countryside.",
    longDescription:
      "Nolen Gur preserves the tradition of authentic date palm jaggery, a winter delicacy from rural Bengal. During the winter months, skilled artisans climb tall date palm trees to collect the sweet sap, which is then carefully processed using age-old techniques to create this golden nectar. Known for its distinctive aroma and rich caramel-like flavor, our Nolen Gur brings the authentic taste of Bengal's countryside to your kitchen, perfect for traditional sweets or as a natural sweetener.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    products: [
      "Artisanal Nolen Gur",
      "Liquid Date Palm Jaggery",
      "Nolen Gur Powder",
      "Traditional Solid Jaggery",
      "Gur Sandesh Sweet Mix",
    ],
  },
]

export default function BrandsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Various brand products"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Our Brands</h1>
          <p className="max-w-2xl text-lg sm:text-xl">
            Discover our family of premium brands, each dedicated to bringing you the finest natural products.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {brands.map((brand, index) => (
              <div
                key={brand.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <Image src={brand.imageSrc || "/placeholder.svg"} alt={brand.name} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">{brand.name}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{brand.longDescription}</p>
                  <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Featured Products:</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                    {brand.products.map((product, idx) => (
                      <li key={idx}>{product}</li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <Button asChild className="bg-[#A8D5BA] hover:bg-[#8D6748] text-white">
                      <Link href={`/brands/${brand.id}`}>View Brand</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#A8D5BA] text-[#8D6748] hover:bg-[#A8D5BA]/10 dark:text-[#A8D5BA] dark:hover:bg-[#A8D5BA]/10"
                    >
                      <a
                        href={`https://${brand.id}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
