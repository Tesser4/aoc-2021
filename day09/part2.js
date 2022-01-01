
import parse from './parse.js'

const isLowPointUnloaded = (map) => ([x, y]) => {
  if (x > 0 && map[x - 1][y] <= map[x][y])
    return false
  if (x < map.length - 1 && map[x + 1][y] <= map[x][y])
    return false
  if (y > 0 && map[x][y - 1] <= map[x][y])
    return false
  if (y < map[0].length - 1 && map[x][y + 1] <= map[x][y])
    return false

  return true
}

const getBasinSize = (map, [x, y], visited = new Set()) => {
  if (map[x][y] === 9)
    return 0
  visited.add([x, y].toString())
  const neighbors = [
    x > 0 ? [x - 1, y] : null,
    x < map.length - 1 ? [x + 1, y] : null,
    y > 0 ? [x, y - 1] : null,
    y < map[0].length - 1 ? [x, y + 1] : null,
  ]
  let count = 1
  for (const neighbor of neighbors)
    if (neighbor && !visited.has(neighbor.toString()))
      count += getBasinSize(map, neighbor, visited)

  return count
}

const solvePart2 = (fileData) => {
  const heightmap = parse(fileData)
  const isLowPoint = isLowPointUnloaded(heightmap)
  const lowPoints = []
  for (let i = 0; i < heightmap.length; i += 1)
    for (let j = 0; j < heightmap[0].length; j += 1)
      if (isLowPoint([i, j]))
        lowPoints.push([i, j])
  const basinSizes = []
  for (const lowPoint of lowPoints)
    basinSizes.push(getBasinSize(heightmap, lowPoint))

  return basinSizes
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, c) => a * c, 1)
}

export default solvePart2
