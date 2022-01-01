
import parse from './parse.js'

const calculateCost = (index, positions) => {
  const sumOfIntegers = x => x * (x + 1) / 2
  let cost = 0
  for (const position of positions)
    if (position !== index)
      cost += sumOfIntegers(Math.abs(position - index))

  return cost
}

const solvePart2 = (fileData) => {
  const positions = parse(fileData)
    .sort((a, b) => a - b)
  let minCost = +Infinity
  const index = { left: 0, right: positions.length }
  while (index.left < index.right) {
    const currIndex = Math.floor((index.left + index.right) / 2)
    const currCost = calculateCost(currIndex, positions)
    if (currCost < minCost)
      minCost = currCost
    const prevIndexCost = calculateCost(currIndex - 1, positions)
    prevIndexCost < currCost
      ? index.right = currIndex - 1
      : index.left = currIndex + 1
  }

  return minCost
}

export default solvePart2
