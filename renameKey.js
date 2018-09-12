/**
 * [renameKey]
 * @param  {String} oldKey
 * @param  {String} newKey
 * @param  {Object} obj
 * @return {Object}
 *
 * @example
 * renameKey('a', 'b', { a: 5 })
 * // => { b: 5 }
 */

const renameKey = (oldKey, newKey, { [oldKey]: old, ...obj }) => ({
	[newKey]: old,
	...obj,
})

module.exports = renameKey
