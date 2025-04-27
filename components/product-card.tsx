import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  name: string
  description: string
  imageSrc: string
  brand: string
  href: string
  buyHref: string
}

export default function ProductCard({ name, description, imageSrc, brand, href, buyHref }: ProductCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-[#8D6748] hover:bg-[#8D6748]/90">{brand}</Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col space-y-2">
        <Button
          asChild
          variant="outline"
          className="w-full border-[#A8D5BA] text-[#8D6748] hover:bg-[#A8D5BA]/10 dark:text-[#A8D5BA] dark:hover:bg-[#A8D5BA]/10"
        >
          <Link href={href}>View Details</Link>
        </Button>
        <Button asChild className="w-full bg-[#A8D5BA] hover:bg-[#8D6748] text-white">
          <a href={buyHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            Buy on {brand} <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
