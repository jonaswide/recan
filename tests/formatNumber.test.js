import test from "ava"
import formatNumber from "../formatNumber"

test("formatNumber", t => {
	t.is(formatNumber(12345678), "12 345 678")
})
