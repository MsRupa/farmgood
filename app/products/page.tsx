"use client"

import { useState } from "react"
import Image from "next/image"
import { Filter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Product {
  id: string
  name: string
  description: string
  imageSrc: string
  brand: {
    id: string
    name: string
  }
  category: string
  price: string
}

const products: Product[] = [
  {
    id: "kashmiri-almonds",
    name: "Premium Kashmiri Almonds",
    description: "Hand-selected, premium quality almonds from the valleys of Kashmir.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    brand: {
      id: "dryrich",
      name: "DryRich",
    },
    category: "Dry Fruits",
    price: "₹899/500g",
  },
  {
    id: "organic-walnuts",
    name: "Organic Walnuts",
    description: "Naturally grown walnuts from the foothills of Himalayas.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    brand: {
      id: "dryrich",
      name: "DryRich",
    },
    category: "Dry Fruits",
    price: "₹799/500g",
  },
  {
    id: "wild-forest-honey",
    name: "Wild Forest Honey",
    description: "Raw, unprocessed honey collected from the depths of Sundarban forests.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    brand: {
      id: "sundarban-honey",
      name: "Sundarban Honey",
    },
    category: "Honey",
    price: "₹599/500g",
  },
  {
    id: "mangrove-blossom-honey",
    name: "Mangrove Blossom Honey",
    description: "Unique honey with distinct flavor from mangrove blossoms of Sundarbans.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    brand: {
      id: "sundarban-honey",
      name: "Sundarban Honey",
    },
    category: "Honey",
    price: "₹649/500g",
  },
  {
    id: "artisanal-nolen-gur",
    name: "Artisanal Nolen Gur",
    description: "Traditional date palm jaggery made using age-old techniques.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    brand: {
      id: "nolen-gur",
      name: "Nolen Gur",
    },
    category: "Gur",
    price: "₹499/500g",
  },
  {
    id: "liquid-date-palm-jaggery",
    name: "Liquid Date Palm Jaggery",
    description: "Pure liquid jaggery extracted from date palm trees in winter.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    brand: {
      id: "nolen-gur",
      name: "Nolen Gur",
    },
    category: "Gur",
    price: "₹549/500ml",
  },
]

export default function ProductsPage() {
  const [brandFilter, setBrandFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  const filteredProducts = products.filter((product) => {
    return (
      (brandFilter === "all" || product.brand.id === brandFilter) &&
      (categoryFilter === "all" || product.category === categoryFilter)
    )
  })

  const brands = [
    { id: "all", name: "All Brands" },
    { id: "dryrich", name: "DryRich" },
    { id: "sundarban-honey", name: "Sundarban Honey" },
    { id: "nolen-gur", name: "Nolen Gur" },
  ]

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "Dry Fruits", name: "Dry Fruits" },
    { id: "Honey", name: "Honey" },
    { id: "Gur", name: "Gur" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Various products"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Our Products</h1>
          <p className="max-w-2xl text-lg sm:text-xl">
            Discover premium farm-fresh products from our family of brands.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-[#FAF9F6] dark:bg-[#0D1F1A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#8D6748] dark:text-[#FFD166]" />
              <h2 className="text-lg font-bold text-[#8D6748] dark:text-[#FFD166]">Filter Products</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="w-full sm:w-48">
                <Select value={brandFilter} onValueChange={setBrandFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand.id} value={brand.id}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-48">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={product.imageSrc || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <Badge className="absolute top-3 right-3 bg-[#8D6748] hover:bg-[#8D6748]/90">
                      {product.brand.name}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166]">{product.name}</h3>
                      <span className="text-sm font-medium text-[#8D6748] dark:text-[#FFD166]">{product.price}</span>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {product.category}
                    </Badge>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{product.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex flex-col space-y-2">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#A8D5BA] text-[#8D6748] hover:bg-[#A8D5BA]/10 dark:text-[#A8D5BA] dark:hover:bg-[#A8D5BA]/10"
                    >
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                    <Button asChild className="w-full bg-[#A8D5BA] hover:bg-[#8D6748] text-white">
                      <a
                        href={`https://${product.brand.id}.com/products/${product.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy on {product.brand.name}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-2">No products found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
