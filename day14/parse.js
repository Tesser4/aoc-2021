
const nl = '\r\n'

const parsePairInsertionRules = (rules) => rules
  .trim()
  .split(nl)
  .map(rule => rule.split(' -> '))
  .reduce((acc, [pair, element]) => {
    acc[pair] = element
    return acc
  }, {})

const parse = (fileData) => {
  const [polymerTemplate, rulesStr] = fileData
    .trim()
    .split(nl.repeat(2))

  return [
    polymerTemplate,
    parsePairInsertionRules(rulesStr)
  ]
}

export default parse
