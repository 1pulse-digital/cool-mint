"use client"

// South African currency config
export const moneyFormatter = Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  currencyDisplay: "symbol",
  currencySign: "standard",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const MoneyField: React.FC<{ value: bigint; className?: string }> = ({
  value,
  className,
}) => (
  <span className={className}>
    {moneyFormatter.format(Number(value) / 100)}
  </span>
)
