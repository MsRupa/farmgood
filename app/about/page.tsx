import Image from "next/image"
import { Leaf, Heart, Users, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Farm landscape"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">About FarmGood</h1>
          <p className="max-w-2xl text-lg sm:text-xl">Our journey from farms to families</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  FarmGood was born from a simple yet powerful vision: to connect India's finest farms with
                  quality-conscious consumers while preserving the natural goodness of farm-fresh products.
                </p>
                <p>
                  Founded in 2023 by a group of agricultural enthusiasts and food experts, we began our journey with a
                  small collection of premium dry fruits sourced directly from Kashmir's orchards. The overwhelming
                  response to our commitment to quality and authenticity inspired us to expand our horizons.
                </p>
                <p>
                  Today, FarmGood proudly houses multiple brands, each dedicated to bringing you the finest natural
                  products from different regions of India. From the pristine mangrove forests of Sundarbans to the date
                  palm groves of Bengal, we continue to explore and curate nature's bounty.
                </p>
                <p>
                  Throughout our growth, we've remained true to our founding principles: maintaining product purity,
                  supporting local farmers, and promoting sustainable agricultural practices.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="FarmGood founders in a farm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#FAF9F6] dark:bg-[#0D1F1A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#0D1F1A]/50 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To bridge the gap between India's finest farms and quality-conscious consumers by curating premium
                agricultural products that maintain their natural goodness while ensuring sustainable practices and
                supporting local farmers.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1F1A]/50 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become India's most trusted curator of premium farm products, setting new standards for quality,
                sustainability, and farmer welfare in the agricultural sector while making nature's finest bounty
                accessible to discerning consumers nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              The principles that guide everything we do at FarmGood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#A8D5BA]/10 p-6 rounded-2xl text-center">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Leaf className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Natural Purity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We preserve the natural goodness of our products, avoiding artificial additives and unnecessary
                processing.
              </p>
            </div>

            <div className="bg-[#A8D5BA]/10 p-6 rounded-2xl text-center">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Quality Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain rigorous quality standards at every stage, from sourcing to packaging.
              </p>
            </div>

            <div className="bg-[#A8D5BA]/10 p-6 rounded-2xl text-center">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Farmer Welfare</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We ensure fair compensation and sustainable livelihoods for the farmers who grow our products.
              </p>
            </div>

            <div className="bg-[#A8D5BA]/10 p-6 rounded-2xl text-center">
              <div className="bg-[#A8D5BA]/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#8D6748] dark:text-[#A8D5BA]" />
              </div>
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-3">Environmental Stewardship</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We promote sustainable farming practices that protect and nurture our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-[#FAF9F6] dark:bg-[#0D1F1A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Journey</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">Key milestones in the FarmGood story.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#A8D5BA]"></div>

            {/* Timeline Items */}
            <div className="relative z-10">
              {/* 2015 */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-[#A8D5BA] shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div className="order-1 bg-white dark:bg-[#0D1F1A]/50 rounded-2xl shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-[#8D6748] dark:text-[#FFD166] text-xl">2023</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    FarmGood founded with a focus on premium dry fruits from Kashmir.
                  </p>
                </div>
              </div>

              {/* 2017 */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-[#A8D5BA] shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                </div>
                <div className="order-1 bg-white dark:bg-[#0D1F1A]/50 rounded-2xl shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-[#8D6748] dark:text-[#FFD166] text-xl">2024</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Launched Sundarban Honey brand, expanding our product portfolio.
                  </p>
                </div>
              </div>

              {/* 2019 */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-[#A8D5BA] shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div className="order-1 bg-white dark:bg-[#0D1F1A]/50 rounded-2xl shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-[#8D6748] dark:text-[#FFD166] text-xl">2024</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Added Nolen Gur to our family of brands, preserving Bengal's winter delicacy.
                  </p>
                </div>
              </div>

              {/* 2021 */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-[#A8D5BA] shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                </div>
                <div className="order-1 bg-white dark:bg-[#0D1F1A]/50 rounded-2xl shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-[#8D6748] dark:text-[#FFD166] text-xl">2025</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Established our Farmer Support Initiative to promote sustainable farming practices.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-[#A8D5BA] shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
                </div>
                <div className="order-1 bg-white dark:bg-[#0D1F1A]/50 rounded-2xl shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-[#8D6748] dark:text-[#FFD166] text-xl">2025</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Expanded nationwide, bringing farm-fresh goodness to consumers across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
