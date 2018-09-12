/**
 * [roundNumber]
 * @param  {Number} n
 * @param  {Number?} decimals
 * @return {Number}
 *
 * @example
 * roundNumber(67.7568948649596)
 * // => 68
 *
 * roundNumber(67.7568948649596, 5)
 * // => 67.75689
 */

const roundNumber = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)

module.exports = roundNumber
