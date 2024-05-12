export const moneyFormatter = Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    currencyDisplay: "symbol",
    currencySign: "standard",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })