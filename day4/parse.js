
const nl = '\r\n'

const parseNums = (nums) => nums
  .split(',')
  .map(Number)

const parseBoard = (board) => board
  .trim()
  .split(nl)
  .map(line => line.split(' '))
  .map(line => line.filter(numStr => numStr !== ''))
  .map(line => line.map(Number))

const parse = (fileData) => {
  const [nums, ...boards] = fileData
    .trim()
    .split(nl.repeat(2))

  return {
    nums: parseNums(nums),
    boards: boards.map(parseBoard)
  }
}

export default parse
