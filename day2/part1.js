
const nl = '\r\n'
const parse = (fileData) => fileData
  .trim()
  .split(nl)
  .map(line => line.split(' '))
  .map(([direction, value]) => ({ direction, value: Number(value) }))

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
