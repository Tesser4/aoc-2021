
import parse from './parse.js'

const FACTOR = 5

const getNeighborCoords = ([x, y], [height, width]) => [
  x > 0 ? [x - 1, y] : null,
  y > 0 ? [x, y - 1] : null,
  x < height - 1 ? [x + 1, y] : null,
  y < width - 1 ? [x, y + 1] : null,
].filter(x => x !== null)

const queue = (() => {
  const q = new Map()
  const init = (riskMap) => {
    for (let horFactor = 0; horFactor < FACTOR; horFactor += 1) {
      for (let verFactor = 0; verFactor < FACTOR; verFactor += 1) {
        for (let i = 0; i < riskMap.length; i += 1) {
          for (let j = 0; j < riskMap[0].length; j += 1) {
            const coords = [
              riskMap.length * horFactor + i,
              riskMap[0].length * verFactor + j,
            ]
            const totalRisk = i + j + horFactor + verFactor === 0
              ? 0
              : +Infinity
            const risk = riskMap[i][j] + horFactor + verFactor <= 9
              ? riskMap[i][j] + horFactor + verFactor
              : (riskMap[i][j] + horFactor + verFactor) % 9
            const prev = null
            q.set(coords.toString(), { coords, totalRisk, risk, prev })
          }
        }
      }
    }
  }
  const dequeue = () => {
    let minTotalRisk = +Infinity
    let coords = ''
    for (const [_, value] of q) {
      if (value.totalRisk < minTotalRisk) {
        coords = value.coords.toString()
        minTotalRisk = value.totalRisk
      }
    }
    const element = q.get(coords)
    q.delete(coords)
    return element
  }
  const setTotalRisk = (coords, risk) => q
    .set(coords.toString(), { ...q.get(coords.toString()), totalRisk: risk })
  const setPrevious = (coords, previous) => q
    .set(coords.toString(), { ...q.get(coords.toString()), prev: previous })
  const getRisk = (coords) => {
    const element = q.get(coords.toString())
    return element.risk
  }
  const getTotalRisk = (coords) => {
    const element = q.get(coords.toString())
    return element.totalRisk
  }
  const has = (coords) => q.has(coords.toString())
  const isEmpty = () => q.size === 0

  return { init, dequeue, setTotalRisk, setPrevious, getRisk, getTotalRisk, has, isEmpty }
})()

const solvePart2 = (fileData) => {
  const riskLevelMap = parse(fileData)
  queue.init(riskLevelMap)
  const HEIGHT = riskLevelMap.length * FACTOR
  const WIDTH = riskLevelMap[0].length * FACTOR
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

export default solvePart2
