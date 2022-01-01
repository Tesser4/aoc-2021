
import parse from './parse.js'

const getNextIndex = (startIdx, endIdx, currentIdx) =>
  startIdx === endIdx
    ? currentIdx
    : startIdx < endIdx
      ? currentIdx + 1
      : currentIdx - 1

const getAllPointsFromLine = ([startPoint, endPoint]) => {
  const allPoints = [[...startPoint]]
  let [x, y] = startPoint
  do {
    x = getNextIndex(startPoint.at(0), endPoint.at(0), x)
    y = getNextIndex(startPoint.at(1), endPoint.at(1), y)
    allPoints.push([x, y])
  } while (x !== endPoint.at(0) || y !== endPoint.at(1))

  return allPoints
}

const solvePart2 = (fileData) => {
  const lines = parse(fileData)
  const diagram = {}
  let count = 0
  for (const line of lines)
    for (const point of getAllPointsFromLine(line))
      point in diagram
        ? diagram[point] += 1
        : diagram[point] = 1
  for (const point in diagram)
    if (diagram[point] > 1)
      count += 1

  return count
}

export default solvePart2
