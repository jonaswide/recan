/**
 * [evolution]
 * @param  {Number} pre
 * @param  {Number} cur
 * @return {Number}
 *
 * @example
 * evolution(50, 80)
 * // => 37.5
 */

export const evolution = (pre, cur) => (1 - pre / cur) * 100
