export default function convertDecimals(
  value: number,
  contract_decimals: number,
  decimal_amount: number
): string {
  const final = (value / 10 ** 18).toFixed(decimal_amount);
  return final;
}
