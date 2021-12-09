
import parse from './parse.js'

const isUnique = (signal) => signal.length < 5 || 6 < signal.length

const solvePart1 = (fileData) => {
  const notes = parse(fileData)
  let uniqueNum = 0
  for (const { digits } of notes)
    for (const digit of digits)
      if (isUnique(digit))
        uniqueNum += 1

  return uniqueNum
}

export default solvePart1
