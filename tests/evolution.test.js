import test from "ava"
import evolution from "../evolution"

test("evolution", t => {
	t.is(evolution(50, 80), 37.5)
})
