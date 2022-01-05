
import parse from './parse.js'

const getNeighborCoords = ([x, y], [height, width]) => [
  x > 0 ? [x - 1, y] : null,
  y > 0 ? [x, y - 1] : null,
  x < height - 1 ? [x + 1, y] : null,
  y < width - 1 ? [x, y + 1] : null,
].filter(x => x !== null)

const queue = (() => {
  const q = new Map()
  const init = (riskMap) => {
    for (let i = 0; i < riskMap.length; i += 1) {
      for (let j = 0; j < riskMap[0].length; j += 1) {
        const coords = [i, j]
        const totalRisk = i + j === 0 ? 0 : +Infinity
        const risk = riskMap[i][j]
        const prev = null
        q.set([i, j].toString(), { coords, totalRisk, risk, prev })
      }
    }
  }
  const dequeue = () => {
    let minTotalRisk = +Infinity
    let coordsStr = ''
    for (const [_, value] of q) {
      if (value.totalRisk < minTotalRisk) {
        coordsStr = value.coords.toString()
        minTotalRisk = value.totalRisk
      }
    }
    const position = q.get(coordsStr)
    q.delete(coordsStr)
    return position
  }
  const setTotalRisk = (coords, risk) => q
    .set(coords.toString(), { ...q.get(coords.toString()), totalRisk: risk })
  const setPrevious = (coords, previous) => q
    .set(coords.toString(), { ...q.get(coords.toString()), prev: previous })
  const getRisk = (coords) => {
    const { risk } = q.get(coords.toString())
    return risk
  }
  const getTotalRisk = (coords) => {
    const { totalRisk } = q.get(coords.toString())
    return totalRisk
  }
  const has = (coords) => q.has(coords.toString())
  const isEmpty = () => q.size === 0

  return { init, dequeue, setTotalRisk, setPrevious, getRisk, getTotalRisk, has, isEmpty }
})()

const solvePart1 = (fileData) => {
  const riskLevelMap = parse(fileData)
  queue.init(riskLevelMap)
  const HEIGHT = riskLevelMap.length
  const WIDTH = riskLevelMap[0].length
  const visited = []
  while (!queue.isEmpty()) {
    const currentPosition = queue.dequeue()
    visited.push(currentPosition)
    const neighborCoords = getNeighborCoords(currentPosition.coords, [HEIGHT, WIDTH])
    for (const coords of neighborCoords) {
      if (queue.has(coords)) {
        const candidateTotalRisk = currentPosition.totalRisk + queue.getRisk(coords)
        if (candidateTotalRisk < queue.getTotalRisk(coords)) {
          queue.setTotalRisk(coords, candidateTotalRisk)
          queue.setPrevious(coords, currentPosition)
        }
      }
    }
  }
  const [finalPosition] = visited
    .filter(p => p.coords[0] === HEIGHT - 1 && p.coords[1] === WIDTH - 1)

  return finalPosition.totalRisk
}

export default solvePart1
