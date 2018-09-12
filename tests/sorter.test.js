import test from "ava"
import sorter from "../sorter"

test("sorter", t => {
	const arr1 = [{ index: "b" }, { index: "a" }]

	t.deepEqual(sorter(arr1, "index"), arr1.reverse())
})
