"use client"

import { useCart } from "@/contexts/cart"
import { RelatedClassCard } from "@/components/related-class-card"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
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
          <RelatedClassCard key={course.name} course={course} />
        ))}
      </div>
    </div>
  )
}
