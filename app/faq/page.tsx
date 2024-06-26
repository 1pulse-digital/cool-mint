"use client"
import { FAQAccordion } from "@/components/base/faqAccordion"
import GetInTouch from "@/components/base/getInTouch"
import HeaderTitle from "@/components/header-title"
import Link from "next/link"

const FAQ = () => {
  return (
    <div className="bg-background py-10 sm:py-20">
      <div>
        <div className="font-helvetaica grid content-center px-8">
          <div className="inline-flex justify-center font-helvetica text-xs font-normal text-foreground">
            <div>
              <Link href="/">
                Home
                <span className="px-1">|</span>
              </Link>
            </div>
            <div>
              <Link href="/faq" className="text-primary">
                FAQ&apos;s
              </Link>
            </div>
          </div>

          <div>
            <HeaderTitle>FAQ</HeaderTitle>
          </div>
        </div>
        <div>
          <FAQAccordion />
        </div>
      </div>
      <div className="py-10 sm:py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}

export default FAQ
