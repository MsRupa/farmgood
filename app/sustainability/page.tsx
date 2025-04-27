import Image from "next/image"
import { Leaf, Recycle, Droplet, Sun } from "lucide-react"

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Sustainable farming"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">From Our Farms</h1>
          <p className="max-w-2xl text-lg sm:text-xl">Our commitment to sustainable farming and ethical sourcing</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-6">Sustainability at FarmGood</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              At FarmGood, sustainability isn't just a buzzword—it's the foundation of everything we do. We believe that
              the finest products come from healthy ecosystems and thriving farming communities. Our commitment to
              sustainable practices ensures that we can continue to bring you premium products while preserving the
              environment for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Practices Section */}
      <section className="py-16 bg-[#FAF9F6] dark:bg-[#0D1F1A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Sustainable Practices</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              We implement various sustainable practices across our supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-[#0D1F1A]/50 p-6 rounded-2xl shadow-md">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mb-4">
                <Leaf className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Organic Farming</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We promote organic farming methods that avoid synthetic pesticides and fertilizers, preserving soil
                health and biodiversity.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1F1A]/50 p-6 rounded-2xl shadow-md">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mb-4">
                <Recycle className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Eco-Friendly Packaging</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We use biodegradable and recyclable packaging materials to minimize our environmental footprint.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1F1A]/50 p-6 rounded-2xl shadow-md">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mb-4">
                <Droplet className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Water Conservation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We implement water-saving techniques like drip irrigation and rainwater harvesting in our partner farms.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1F1A]/50 p-6 rounded-2xl shadow-md">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mb-4">
                <Sun className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Renewable Energy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're transitioning to solar power for our processing facilities to reduce our carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Support Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-6">Supporting Our Farmers</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  At the heart of FarmGood's sustainability commitment is our support for the farming communities we
                  work with. We believe that sustainable farming begins with sustainable livelihoods for farmers.
                </p>
                <p>Through our Farmer Support Initiative, we provide:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fair compensation that exceeds market rates</li>
                  <li>Technical training on sustainable farming practices</li>
                  <li>Access to organic certification programs</li>
                  <li>Interest-free loans for farm improvements</li>
                  <li>Long-term purchasing commitments for financial security</li>
                </ul>
                <p>
                  By investing in our farmers, we ensure not only the quality of our products but also the long-term
                  sustainability of the communities that produce them.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Farmers in the field"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Sourcing Section */}
      <section className="py-16 bg-[#FAF9F6] dark:bg-[#0D1F1A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Sustainable Sourcing</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Discover how we source our premium products sustainably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#0D1F1A]/50 p-6 rounded-2xl shadow-md">
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dry fruits orchard"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">DryRich Sourcing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our dry fruits are sourced from orchards that practice sustainable water management and natural pest
                control. We work with farmers who maintain biodiversity by growing multiple varieties and preserving
                native species.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1F1A]/50 p-6 rounded-2xl shadow-md">
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Honey collection"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Sundarban Honey Collection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our honey is collected using traditional methods that ensure bee colonies remain healthy and thriving.
                We never harvest more than 70% of a hive's honey, leaving enough for the bees to sustain themselves.
                This approach protects both the bees and the delicate mangrove ecosystem.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1F1A]/50 p-6 rounded-2xl shadow-md">
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Date palm trees"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Nolen Gur Production</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our date palm jaggery is produced using sustainable tapping methods that don't harm the trees. We work
                with artisans who follow traditional techniques, using clay pots and natural processing methods that
                minimize environmental impact while preserving the authentic flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Natural landscape"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-6">Our Environmental Impact</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  We're committed to minimizing our environmental footprint across all aspects of our operations. From
                  farm to packaging, we implement practices that protect and preserve our natural resources.
                </p>
                <p>Our environmental initiatives include:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Carbon footprint reduction through local sourcing</li>
                  <li>Biodiversity conservation in farming areas</li>
                  <li>Plastic reduction in packaging</li>
                  <li>Energy-efficient processing facilities</li>
                  <li>Waste reduction and composting programs</li>
                </ul>
                <p>
                  We regularly assess our environmental impact and set ambitious goals for continuous improvement. By
                  choosing FarmGood products, you're supporting these efforts to protect our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
