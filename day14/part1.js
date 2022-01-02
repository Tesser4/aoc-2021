
import parse from './parse.js'

const steps = 10
const getMostCommonCount = (stats) => Math.max(...Object.values(stats))
const getLeastCommonCount = (stats) => Math.min(...Object.values(stats))

const doPairInsertion = (polymer, rules) => {
  const elements = []
  for (let i = 0; i < polymer.length - 1; i += 1) {
    const firstElement = polymer[i]
    const secondElement = polymer[i + 1]
    const middleElement = rules[firstElement + secondElement]
    elements.push(firstElement)
    elements.push(middleElement)
    if (i === polymer.length - 2)
      elements.push(secondElement)
  }
  return elements.join('')
}

const getElementStats = (polymer) => polymer
  .split('')
  .reduce((acc, cur) => {
    cur in acc
      ? acc[cur] += 1
      : acc[cur] = 1
    return acc
  }, {})

const solvePart1 = (fileData) => {
  const [polymerTemplate, pairInsertionRules] = parse(fileData)
  let polymer = polymerTemplate
  for (let i = 0; i < steps; i += 1)
    polymer = doPairInsertion(polymer, pairInsertionRules)
  const stats = getElementStats(polymer)

  return getMostCommonCount(stats) - getLeastCommonCount(stats)
}

export default solvePart1
