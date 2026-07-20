export const moneyFormatter = Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    currencyDisplay: "symbol",
    currencySign: "standard",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

export function formatPrice(cents: bigint | number): string {
  const value = Number(cents)
  if (value === 0) return "Free"
  return moneyFormatter.format(value / 100)
}