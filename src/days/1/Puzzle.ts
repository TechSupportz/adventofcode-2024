const first = (input: string) => {
	const inputLines = input.split("\n")
	const LList: number[] = []
	const RList: number[] = []

	inputLines.forEach((line) => {
		const numbers = line.split("   ")
		LList.push(parseInt(numbers[0]))
		RList.push(parseInt(numbers[1]))
	})

	LList.sort((a, b) => a - b)
	RList.sort((a, b) => a - b)

	const totalDistance = LList.reduce((prev, curr, i) => {
		const diff = Math.abs(curr - RList[i])
		return prev + diff
	}, 0)

	return totalDistance
}

const expectedFirstSolution = 11

const second = (input: string) => {
	const inputLines = input.split("\n")
	const LList: number[] = []
	const RList: number[] = []

	inputLines.forEach((line) => {
		const numbers = line.split("   ")
		LList.push(parseInt(numbers[0]))
		RList.push(parseInt(numbers[1]))
	})

	const counter: Record<string, number> = {}

	const similarityScore = LList.reduce((acc, number, i) => {
		if (!counter[`${number}`]) {
			counter[`${number}`] = number * RList.filter((RListNum) => RListNum === number).length
		}

		return acc + counter[`${number}`]
	}, 0)

	return similarityScore
}

const expectedSecondSolution = 31

export { first, expectedFirstSolution, second, expectedSecondSolution }
