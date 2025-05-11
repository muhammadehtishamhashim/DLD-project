import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SmallTitle from "@/components/small-title"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-start justify-center bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <SmallTitle />

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Transform Your <br className="hidden sm:block" />
          Management with <span className="font-bold">FG<span className="text-green-700">-</span><span className="text-blue-600">Pro</span></span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Experience seamless management with our all-in-one platform. <br className="hidden sm:block" />
          From academics to administration, FG-Pro has you covered.
          <br className="hidden sm:block" />
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Start for free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors focus:outline focus:outline-offset-2 focus:outline-gray-950"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
