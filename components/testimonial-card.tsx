import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
}

export default function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
  return (
    <Card className="rounded-2xl transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-[#A8D5BA] mb-4" />
        <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{quote}"</p>
        <div>
          <p className="font-bold text-[#8D6748] dark:text-[#FFD166]">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        </div>
      </CardContent>
    </Card>
  )
}
