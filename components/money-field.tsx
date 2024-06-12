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

export const MoneyField: React.FC<{ value: bigint }> = ({ value }) => (
  <span>{moneyFormatter.format(value / 100n)}</span>
)
