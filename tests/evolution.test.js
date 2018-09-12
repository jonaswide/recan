import evolution from "../evolution"
import test from "ava"

test("Evolution", t => {
	t.is(evolution(50, 80), 37.5)
})
