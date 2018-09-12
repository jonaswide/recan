/**
 * [roundNumber]
 * @param  {Number} n
 * @param  {Number?} decimals
 * @return {Number}
 *
 * @example
 * roundNumber(67.4568958649596)
 * // => 67.5
 */

const roundNumber = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)

export default roundNumber
