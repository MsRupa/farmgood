import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface BrandCardProps {
  name: string
  description: string
  imageSrc: string
  href: string
}

export default function BrandCard({ name, description, imageSrc, href }: BrandCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          variant="outline"
          className="w-full border-[#A8D5BA] text-[#8D6748] hover:bg-[#A8D5BA]/10 dark:text-[#A8D5BA] dark:hover:bg-[#A8D5BA]/10"
        >
          <Link href={href} className="flex items-center justify-center">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
