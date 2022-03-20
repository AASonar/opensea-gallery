export default function convertDecimals(
  value: number,
  contract_decimals: number,
  decimal_amount: number
): string {
  //   console.log(contract_decimals);
  const final = (value / 10 ** 18).toFixed(decimal_amount);
  console.log(final);
  return final;
}
