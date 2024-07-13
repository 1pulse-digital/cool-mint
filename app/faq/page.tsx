"use client"
import { FAQAccordion } from "@/components/base/faqAccordion"
import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import Link from "next/link"

const FAQ = () => {
  return (
    <div className="bg-background py-10 sm:py-20">
      <div>
        <div className="font-helvetaica grid content-center px-8">
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "FAQ", href: "/faq" },
            ]}
          />
          <HeaderTitle>FAQ</HeaderTitle>
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
