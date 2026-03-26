"use server"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import {
  MyCart,
  MyCartRequest,
  RemoveFromCart,
  RemoveFromCartRequest,
} from "@/lib/fusion/commerce/cart.manager.pb"
import { Cart } from "@/lib/fusion/commerce/cart.pb"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import {
  GetRelatedClasses,
  UpcomingSessions,
} from "@/lib/fusion/masterClass/session.manager.pb"

initTransport()

export async function myCart(request: MyCartRequest): Promise<Cart> {
  // TODO: Can we use the ETAG as a cache key?
  try {
    return await MyCart(request, {
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to get cart")
  }
}

export async function getRelatedClassesForCart(request: {
  products: string[]
}): Promise<MasterClass[]> {
  try {
    // Fetch all upcoming sessions to map products → master classes
    const { sessions } = await UpcomingSessions({}, {})

    // Find unique parent master class names for cart products
    const parentNames = new Set<string>()
    for (const product of request.products) {
      const session = sessions.find((s) => s.product === product)
      if (session) {
        parentNames.add(session.parent)
      }
    }

    // Fetch related classes for each parent, deduplicate
    const seen = new Set<string>()
    const related: MasterClass[] = []

    for (const name of parentNames) {
      try {
        const response = await GetRelatedClasses({ name, limit: 2 }, {})
        for (const mc of response.masterClasses) {
          if (!seen.has(mc.name) && !parentNames.has(mc.name)) {
            seen.add(mc.name)
            related.push(mc)
          }
        }
      } catch {
        // Skip if related classes fetch fails for a class
      }
    }

    return related
  } catch {
    return []
  }
}

export async function removeFromCart(
  request: RemoveFromCartRequest,
): Promise<Cart> {
  try {
    return await RemoveFromCart(request, {
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to remove from cart")
  }
}
