/**
 * [concatCurryer]
 * @param  {Array | Object} pre
 * @param  {Array | Object} cur
 * @return {Array}
 *
 * @example
 * concatCurryer([{ a: 1 }, { b: 2 }])({ c: 3 })
 * // => [{ a: 1 }, { b: 2 }, { c: 3 }]
 */

const concatCurryer = pre => cur => {
	const preToConcat = Array.isArray(pre) ? pre : [pre]
	const curToConcat = Array.isArray(cur) ? cur : [cur]
	return [...preToConcat, ...curToConcat]
}

module.exports = concatCurryer
