import test from "ava"
import concatCurryer from "../concatCurryer"

const arr = [{ a: 1 }, { b: 2 }]
const obj = { c: 3 }

test("concatCurryer - arr and object", t => {
	t.deepEqual(concatCurryer(arr)(obj), [...arr, obj])
})

test("concatCurryer - arr and arr", t => {
	t.deepEqual(concatCurryer(arr)(arr), [...arr, ...arr])
})

test("concatCurryer - object and object", t => {
	t.deepEqual(concatCurryer(obj)(obj), [obj, obj])
})
