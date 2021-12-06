
import parse from './parse.js'

const recurseOnFish = (fish, days, memo = {}) => {
  if (days === 0)
    return 1
  const prop = `${fish}-${days}`
  if (prop in memo)
    return memo[prop]
  memo[prop] = fish === 0
    ? recurseOnFish(6, days - 1, memo) + recurseOnFish(8, days - 1, memo)
    : days >= fish
      ? recurseOnFish(0, days - fish, memo)
      : recurseOnFish(fish - days, 0, memo)

  return memo[prop]
}

const solvePart2 = (fileData) => {
  const fishes = parse(fileData)
  const DAYS = 256
  let fishCount = 0
  for (const fish of fishes)
    fishCount += recurseOnFish(fish, DAYS)

  return fishCount
}

export default solvePart2
