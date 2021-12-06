
import parse from './parse.js'

const solvePart1 = (fileData) => {
  let fishes = parse(fileData)
  const DAYS = 80
  for (let i = 0; i < DAYS; i += 1) {
    let spawnCount = 0
    fishes = fishes.map(fish => {
      if (fish === 0) {
        fish = 6
        spawnCount += 1
      } else {
        fish -= 1
      }
      return fish
    })
    for (let i = 0; i < spawnCount; i += 1)
      fishes.push(8)
  }

  return fishes.length
}

export default solvePart1
