/**
 * [formatNumber]
 * @param  {Numhber} num
 * @return {String}
 *
 * @example
 * formatNumber(12345678)
 * // => 12 345 678
 */

export const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
