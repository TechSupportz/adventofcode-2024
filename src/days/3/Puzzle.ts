const first = (input: string) => {
	const instructions = input.match(/ *mul\(\d*?,\d*?\)/g).map((instruction) =>
		instruction
			.match(/\d*?,\d*/g)[0]
			.split(",")
			.map((num) => parseInt(num)),
	)

	const result = instructions.reduce((acc, curr) => {
		return acc + curr[0] * curr[1]
	}, 0)

	return result
}

const expectedFirstSolution = 161

const second = (input: string) => {
	const instructions = input.match(/ *mul\(\d*?,\d*?\)|do\(\)|don't\(\)/g)

	let isDisabled = false
	let resultSum = 0

	for (let instruction of instructions) {
		if (instruction === "do()") {
			isDisabled = false
			continue
		}

		if (instruction === "don't()") {
			isDisabled = true
			continue
		}

		if (isDisabled) continue

		const values = instruction
			.match(/\d*?,\d*/g)[0]
			.split(",")
			.map((num) => parseInt(num))

		resultSum = resultSum + values[0] * values[1]
	}

	return resultSum
}

const expectedSecondSolution = 48

export { first, expectedFirstSolution, second, expectedSecondSolution }
