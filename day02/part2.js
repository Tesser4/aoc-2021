
import parse from './parse.js'

const solvePart2 = (fileData) => {
  const submarineCourse = parse(fileData)
  const position = { horizontal: 0, depth: 0, aim: 0 }
  for (const { direction, value } of submarineCourse) {
    if (direction === 'down')
      position.aim += value
    else if (direction === 'up')
      position.aim -= value
    else if (direction === 'forward') {
      position.horizontal += value
      position.depth += position.aim * value
    }
  }

  return position.horizontal * position.depth
}

export default solvePart2
