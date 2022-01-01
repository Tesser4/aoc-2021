
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

const solvePart1 = (fileData) => {
  const heightmap = parse(fileData)
  const isLowPoint = isLowPointUnloaded(heightmap)
  const lowPointHeights = []
  for (let i = 0; i < heightmap.length; i += 1)
    for (let j = 0; j < heightmap[0].length; j += 1)
      if (isLowPoint([i, j]))
        lowPointHeights.push(heightmap[i][j])

  return lowPointHeights
    .map(x => x + 1)
    .reduce((a, c) => a + c)
}

export default solvePart1
