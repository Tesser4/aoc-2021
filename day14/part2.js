
import parse from './parse.js'

const steps = 40
const getMostCommonCount = (stats) => Math.max(...Object.values(stats))
const getLeastCommonCount = (stats) => Math.min(...Object.values(stats))

const concatStatObjects = (stats) => stats
  .reduce((acc, cur) => {
    for (const [element, occurrences] of Object.entries(cur)) {
      element in acc
        ? acc[element] += occurrences
        : acc[element] = occurrences
    }
    return acc
  }, {})

const getBaseStats = (...elements) => elements
  .reduce((acc, cur) => {
    cur in acc
      ? acc[cur] += 1
      : acc[cur] = 1
    return acc
  }, {})

const getPairStats = (pair, rules, step, memo = {}) => {
  const [firstElement, secondElement] = pair
  const middleElement = rules[pair]
  if (step === 1)
    return getBaseStats(firstElement, middleElement)
  const prop = `${pair},${step}`
  if (prop in memo)
    return memo[prop]
  memo[prop] = concatStatObjects([
    getPairStats(firstElement + middleElement, rules, step - 1, memo),
    getPairStats(middleElement + secondElement, rules, step - 1, memo),
  ])

  return memo[prop]
}

const solvePart2 = (fileData) => {
  const [polymerTemplate, pairInsertionRules] = parse(fileData)
  const stats = []
  for (let i = 0; i < polymerTemplate.length - 1; i += 1) {
    const pair = polymerTemplate[i] + polymerTemplate[i + 1]
    stats.push(getPairStats(pair, pairInsertionRules, steps))
  }
  const totalStats = concatStatObjects(stats)
  totalStats[polymerTemplate.at(-1)] += 1

  return getMostCommonCount(totalStats) - getLeastCommonCount(totalStats)
}

export default solvePart2
