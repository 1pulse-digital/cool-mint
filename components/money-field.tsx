"use client"

import { formatPrice } from "@/lib/util/money-formatter"

export const MoneyField: React.FC<{ value: bigint; className?: string }> = ({
  value,
  className,
}) => <span className={className}>{formatPrice(value)}</span>
