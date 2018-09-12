import test from "ava"
import roundNumber from "../roundNumber"

const num = 67.7568948649596

test("roundNumber", t => {
	t.is(roundNumber(num), 68)
})

test("roundNumber - 5 decimals", t => {
	t.is(roundNumber(num, 5), 67.75689)
})
