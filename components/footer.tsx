import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] dark:bg-[#0D1F1A] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">FarmGood</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-xs">
              Premium products from India's heartlands — connecting farms to families with quality and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#8D6748] dark:text-gray-400 dark:hover:text-[#A8D5BA]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#8D6748] dark:text-gray-400 dark:hover:text-[#A8D5BA]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#8D6748] dark:text-gray-400 dark:hover:text-[#A8D5BA]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#8D6748] dark:text-gray-400 dark:hover:text-[#A8D5BA]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[#8D6748] dark:text-gray-300 dark:hover:text-[#A8D5BA]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="text-gray-600 hover:text-[#8D6748] dark:text-gray-300 dark:hover:text-[#A8D5BA]"
                >
                  Our Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-[#8D6748] dark:text-gray-300 dark:hover:text-[#A8D5BA]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-gray-600 hover:text-[#8D6748] dark:text-gray-300 dark:hover:text-[#A8D5BA]"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-[#8D6748] dark:text-gray-300 dark:hover:text-[#A8D5BA]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-300 mb-2">Newtown, Kolkata</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">West Bengal, India</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Email: care@farmgood.in</p>
              <p className="text-gray-600 dark:text-gray-300">Phone: +91 62977 37219</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay updated with our latest products and farm stories.
            </p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none focus-visible:ring-[#A8D5BA]" />
              <Button type="submit" className="rounded-l-none bg-[#A8D5BA] hover:bg-[#8D6748] text-white">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} FarmGood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
