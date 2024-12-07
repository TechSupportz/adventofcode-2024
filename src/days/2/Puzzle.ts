const first = (input: string) => {
	const reports = input.split("\n").map((line) => line.split(" ").map((item) => parseInt(item)))

	const safeLayers: number[][] = []

	reportLoop: for (let report of reports) {
		let isIncreasing = false

		for (let i = 0; i < report.length - 1; i++) {
			const diff = report[i] - report[i + 1]

			if (i === 0) {
				isIncreasing = diff > 0
			}

			if (diff > 3 || diff < -3 || diff === 0) continue reportLoop
			if (i !== 0 && isIncreasing !== diff > 0) continue reportLoop
		}

		safeLayers.push(report)
	}

	return safeLayers.length
}

const expectedFirstSolution = 2

const second = (input: string) => {
	const reports = input.split("\n").map((line) => line.split(" ").map((item) => parseInt(item)))

	const safeLayers: number[][] = []

	const checkSafe = (report: number[]) => {
		let isIncreasing = false

		for (let i = 0; i < report.length - 1; i++) {
			const diff = report[i] - report[i + 1]

			if (i === 0) {
				isIncreasing = diff > 0
			}

			if (diff > 3 || diff < -3 || diff === 0) return false
			if (i !== 0 && isIncreasing !== diff > 0) return false
		}

		return true
	}

	reportLoop: for (let report of reports) {
		const isSafe = checkSafe(report)

		if (!isSafe) {
			for (let i = 0; i < report.length; i++) {
				const isRemovedSafe = checkSafe(report.toSpliced(i, 1))

				if (isRemovedSafe) {
					safeLayers.push(report)
					continue reportLoop
				}
			}
		}

		if (isSafe) {
			safeLayers.push(report)
		}
	}

	return safeLayers.length
}

const expectedSecondSolution = 4

export { first, expectedFirstSolution, second, expectedSecondSolution }
