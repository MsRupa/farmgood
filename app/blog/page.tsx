import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  imageSrc: string
  category: string
  date: string
  author: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: "health-benefits-raw-honey",
    title: "The Health Benefits of Raw Honey",
    excerpt:
      "Discover the numerous health benefits of consuming raw, unprocessed honey and why it's superior to commercial varieties.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    category: "Health",
    date: "June 15, 2023",
    author: "Dr. Anita Sharma",
    readTime: "5 min read",
  },
  {
    id: "importance-nolen-gur",
    title: "The Cultural Importance of Nolen Gur in Bengali Cuisine",
    excerpt:
      "Explore the rich tradition of Nolen Gur in Bengali sweets and how this winter delicacy has shaped the region's culinary heritage.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    category: "Culture",
    date: "January 10, 2023",
    author: "Sanjay Ghosh",
    readTime: "7 min read",
  },
  {
    id: "handpicked-dry-fruits",
    title: "Why Handpicked Dry Fruits Are Better",
    excerpt:
      "Learn about the quality difference in handpicked dry fruits and how traditional harvesting methods preserve flavor and nutritional value.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    category: "Nutrition",
    date: "March 22, 2023",
    author: "Priya Patel",
    readTime: "6 min read",
  },
  {
    id: "sustainable-beekeeping",
    title: "Sustainable Beekeeping Practices in Sundarbans",
    excerpt:
      "How traditional beekeepers in the Sundarbans maintain the delicate balance between honey collection and ecosystem preservation.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    category: "Sustainability",
    date: "April 5, 2023",
    author: "Rahul Das",
    readTime: "8 min read",
  },
  {
    id: "seasonal-eating-guide",
    title: "A Guide to Seasonal Eating with Farm-Fresh Products",
    excerpt:
      "Why eating seasonally is better for your health, the environment, and your taste buds, with tips for each season.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    category: "Lifestyle",
    date: "May 18, 2023",
    author: "Meera Joshi",
    readTime: "6 min read",
  },
  {
    id: "traditional-farming-methods",
    title: "Traditional Farming Methods Making a Comeback",
    excerpt:
      "How ancient farming techniques are being revived to address modern agricultural challenges and improve sustainability.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    category: "Agriculture",
    date: "February 28, 2023",
    author: "Vikram Singh",
    readTime: "7 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Blog header image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Blog & Insights</h1>
          <p className="max-w-2xl text-lg sm:text-xl">
            Stories, tips, and knowledge from the world of farm-fresh products
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.imageSrc || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-[#A8D5BA] hover:bg-[#A8D5BA]/90 text-[#0D1F1A]">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{post.excerpt}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#A8D5BA] text-[#8D6748] hover:bg-[#A8D5BA]/10 dark:text-[#A8D5BA] dark:hover:bg-[#A8D5BA]/10"
                  >
                    <Link href={`/blog/${post.id}`}>Read Article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
