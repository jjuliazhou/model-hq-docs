import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, BookOpen, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <Card className="w-full max-w-2xl text-center bg-transparent">
        <CardContent className="p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/images/modelhq.png" alt="Model HQ" width={100} height={100} className="h-8 w-auto" />
          </div>

          {/* 404 Text */}
          <div className="space-y-4">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Page Not Found</h2>
            <p className="text-gray-600 max-w-md mx-auto dark:text-gray-300">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL
              might be incorrect.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="flex items-center gap-2">
                <Link href="/">
                  <Home className="w-4 h-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/#quick-navigation">
                  <BookOpen className="w-4 h-4" />
                  Browse Documentation
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/support">
                  <Mail className="w-4 h-4" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>

          {/* Helpful Suggestions */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-900 mb-3 dark:text-gray-100">What you can do:</h3>
            <ul className="text-sm text-gray-600 space-y-1 dark:text-gray-300">
              <li>• Check the URL for any typos</li>
              <li>• Use the search function to find what you're looking for</li>
              <li>• Browse our documentation from the home page</li>
              <li>• Contact our support team if you need help</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
