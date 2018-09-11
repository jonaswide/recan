/**
 * [stringHandleRegEx]
 * @param  {String} str
 * @param  {RegEx} match
 * @param  {Function} func
 * @return {String}
 *
 * @example
 * stringHandleRegEx("this is bold", "bold", match => <b>{match}</b>)
 * // => "this is <b>bold</b>"
 */

export const stringHandleRegEx = (str, match, func) => {
	let curCharStart = 0
	let curCharLen = 0

	let result = str.split(match)

	for (var i = 1; i < result.length; i += 2) {
		curCharLen = result[i].length
		curCharStart += result[i - 1].length
		result[i] = func(result[i], i, curCharStart)
		curCharStart += curCharLen
	}

	return result
}
