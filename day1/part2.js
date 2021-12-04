
import parse from './parse.js'

const solvePart2 = (fileData) => {
  const sonarSweepReport = parse(fileData)
  const step = 3
  let largerSumCount = 0
  let previousSum = sonarSweepReport
    .slice(0, step)
    .reduce((a, c) => a + c)
  for (let i = 0; i < sonarSweepReport.length - step; i += 1) {
    const currentSum = previousSum - sonarSweepReport[i] + sonarSweepReport[i + step]
    if (currentSum > previousSum)
      largerSumCount += 1
    previousSum = currentSum
  }
  return largerSumCount
}

export default solvePart2
