export function priceFormatter(price, isYearly) {
  return isYearly ? `$${price}/yr` : `$${price}/mo`;
}
