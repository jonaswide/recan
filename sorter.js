/**
 * [sorter]
 * @param  {Array} arr
 * @param  {String} key
 * @return {Array}
 *
 * @example
 * sorter([{ index: 5 }, { index: 2 }])
 * // => [{ index: 2 }, { index: 5 }]
 */

const sorter = (arr, key) =>
	arr.sort((a, b) => {
		if (!a[key] || !b[key]) return 0
		if (a[key] < b[key]) return -1
		if (a[key] > b[key]) return 1
		return 0
	})

module.exports = sorter
