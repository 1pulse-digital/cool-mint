"use client"

import { useCart } from "@/contexts/cart"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { SignalHigh } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { getRelatedClassesForCart } from "../actions"

export const CartRelatedClasses: React.FC = () => {
  const { cart } = useCart()
  const [relatedClasses, setRelatedClasses] = useState<MasterClass[]>([])

  useEffect(() => {
    if (!cart || cart.items.length === 0) {
      setRelatedClasses([])
      return
    }

    const products = cart.items.map((item) => item.product)
    getRelatedClassesForCart({ products })
      .then((classes) => setRelatedClasses(classes))
      .catch((err) => {
        console.error("Failed to fetch related classes for cart:", err)
        setRelatedClasses([])
      })
  }, [cart])

  if (relatedClasses.length === 0) {
    return null
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <h2 className="font-helvetica text-lg font-bold text-muted-foreground">
        Add to Your Order
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {relatedClasses.slice(0, 2).map((course) => (
          <a
            key={course.name}
            href={`/classes/${course.name.replace("masterClasses/", "")}`}
          >
            <div className="group cursor-pointer rounded-b-lg border-primary/10 bg-[#262626]">
              <div className="relative h-[160px] overflow-hidden rounded-t-lg">
                <Image
                  src={course.gallery.thumbnail.url}
                  alt={course.displayName}
                  className="object-cover transition-transform group-hover:scale-105"
                  fill
                />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-helvetica font-semibold text-foreground">
                  {course.displayName}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {course.duration} Minutes
                  </span>
                  <span className="font-semibold text-primary">
                    {moneyFormatter.format(course.standardPrice / 100n)}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <SignalHigh className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <p className="font-helvetica font-medium normal-case text-foreground">
                    {course.difficulty}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
