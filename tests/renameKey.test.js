import test from "ava"
import renameKey from "../renameKey"

test("renameKey", t => {
	t.deepEqual(renameKey("a", "b", { a: 5 }), { b: 5 })
})
