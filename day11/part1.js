
import parse from './parse.js'

const getNeighbors = (i, j, matrix) => [
  i > 0 ? [i - 1, j] : null,
  i > 0 && j < matrix[0].length - 1 ? [i - 1, j + 1] : null,
  j < matrix[0].length - 1 ? [i, j + 1] : null,
  i < matrix.length - 1 && j < matrix[0].length - 1 ? [i + 1, j + 1] : null,
  i < matrix.length - 1 ? [i + 1, j] : null,
  i < matrix.length - 1 && j > 0 ? [i + 1, j - 1] : null,
  j > 0 ? [i, j - 1] : null,
  i > 0 && j > 0 ? [i - 1, j - 1] : null,
].filter(x => x !== null)

const solvePart1 = (fileData) => {
  let energyLevels = parse(fileData)
  let flashes = 0
  for (let steps = 0; steps < 100; steps += 1) {
    energyLevels = energyLevels
      .map(line => line.map(energyLevel => energyLevel + 1))
    const queue = []
    for (let i = 0; i < energyLevels.length; i += 1) {
      for (let j = 0; j < energyLevels[0].length; j += 1) {
        if (energyLevels[i][j] > 9) {
          energyLevels[i][j] = 0
          flashes += 1
          queue.push([i, j])
        }
      }
    }
    while (queue.length) {
      const [i, j] = queue.shift()
      for (const [x, y] of getNeighbors(i, j, energyLevels)) {
        if (energyLevels[x][y] === 0)
          continue
        energyLevels[x][y] += 1
        if (energyLevels[x][y] > 9) {
          energyLevels[x][y] = 0
          flashes += 1
          queue.push([x, y])
        }
      }
    }
  }

  return flashes
}

export default solvePart1
