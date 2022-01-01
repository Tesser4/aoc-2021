
import parse from './parse.js'

const solvePart1 = (fileData) => {
  const submarineCourse = parse(fileData)
  const position = { horizontal: 0, depth: 0, }
  for (const { direction, value } of submarineCourse)
    direction === 'forward'
      ? position.horizontal += value
      : position.depth += direction === 'up'
        ? -value
        : value

  return position.horizontal * position.depth
}

export default solvePart1
