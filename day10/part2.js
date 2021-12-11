
import parse from './parse.js'

const charMapping = {
  ')': { openChar: '(', score: 1 },
  ']': { openChar: '[', score: 2 },
  '}': { openChar: '{', score: 3 },
  '>': { openChar: '<', score: 4 },
}

const getMissingChars = (line) => {
  const openChars = Object.values(charMapping)
    .map(({ openChar }) => openChar)
  const stack = []
  for (const char of line) {
    if (openChars.includes(char))
      stack.push(char)
    else
      if (stack.pop() !== charMapping[char].openChar)
        return ''
  }
  let missingChars = ''
  while (stack.length) {
    const openChar = stack.pop()
    const closeChar = Object.entries(charMapping)
      .filter(([_, value]) => value.openChar === openChar)
      .map(([key, _]) => key)
    missingChars += closeChar
  }

  return missingChars
}

const solvePart2 = (fileData) => {
  const navigationSubsystem = parse(fileData)
  const missingClosingChars = []
  for (const line of navigationSubsystem) {
    const missingChars = getMissingChars(line)
    if (missingChars.length)
      missingClosingChars.push(missingChars)
  }
  const scores = missingClosingChars
    .map(([...chars]) => {
      let score = 0
      for (const char of chars) {
        score *= 5
        score += charMapping[char].score
      }
      return score
    })

  return scores.sort((a, b) => b - a)[Math.floor(scores.length / 2)]
}

export default solvePart2
