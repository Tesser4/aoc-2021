
const nl = '\r\n'
const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(line => line.split(' '))
  .map(([direction, value]) => ({ direction, value: Number(value) }))

const solvePart1 = (fileData) => {
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

export default solvePart1
