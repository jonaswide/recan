import test from "ava"
import stringHandleRegEx from "../stringHandleRegEx"

test("stringHandleRegEx", t => {
	const str = "this is reversed"
	const reg = /(reversed)+/g
	const formatter = match =>
		match
			.split("")
			.reverse()
			.join("")

	t.deepEqual(stringHandleRegEx(str, reg, formatter), ["this is ", "desrever", ""])
})
