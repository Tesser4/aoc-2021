
import parse from './parse.js'

const discardDiagonal = (lines) => lines
  .filter(([p1, p2]) => p1.at(0) === p2.at(0) || p1.at(1) === p2.at(1))

const getAllPointsFromLine = ([point1, point2]) => {
  const equalityIdx = point1.at(0) === point2.at(0) ? 0 : 1
  const inequalityIdx = equalityIdx === 0 ? 1 : 0
  const equalNum = point1.at(equalityIdx)
  const minUnequal = Math.min(point1.at(inequalityIdx), point2.at(inequalityIdx))
  const maxUnequal = Math.max(point1.at(inequalityIdx), point2.at(inequalityIdx))
  const allPoints = []
  for (let i = minUnequal; i <= maxUnequal; i += 1)
    allPoints.push(equalityIdx === 0 ? [equalNum, i] : [i, equalNum])

  return allPoints
}

const solvePart1 = (fileData) => {
  const lines = parse(fileData)
  const diagram = {}
  let count = 0
  for (const line of discardDiagonal(lines))
    for (const point of getAllPointsFromLine(line))
      point in diagram
        ? diagram[point] += 1
        : diagram[point] = 1
  for (const point in diagram)
    if (diagram[point] > 1)
      count += 1

  return count
}

export default solvePart1
