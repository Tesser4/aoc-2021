
import parse from './parse.js'

const charMapping = {
  ')': { openChar: '(', score: 3 },
  ']': { openChar: '[', score: 57 },
  '}': { openChar: '{', score: 1197 },
  '>': { openChar: '<', score: 25137 },
}

const solvePart1 = (fileData) => {
  const navigationSubsystem = parse(fileData)
  const openChars = Object.values(charMapping)
    .map(({ openChar }) => openChar)
  let score = 0
  for (const line of navigationSubsystem) {
    const stack = []
    for (const char of line) {
      if (openChars.includes(char)) {
        stack.push(char)
      } else {
        const popped = stack.pop()
        if (popped !== charMapping[char].openChar) {
          score += charMapping[char].score
          break
        }
      }
    }
  }

  return score
}

export default solvePart1
