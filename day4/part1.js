
import parse from './parse.js'

const isWinner = (nums, board) => {
  for (let i = 0; i < board[0].length; i += 1) {
    const column = []
    for (const line of board) {
      if (i === 0 && line.every(n => nums.includes(n)))
        return true
      column.push(line[i])
    }
    if (column.every(n => nums.includes(n)))
      return true
  }
  return false
}

const getUncheckedSum = (checkedNums, board) => board
  .map(line => line.filter(n => !checkedNums.includes(n)))
  .flat()
  .reduce((a, c) => a + c)

const solvePart1 = (fileData) => {
  const { nums, boards } = parse(fileData)
  const drawnNums = []
  for (const num of nums) {
    drawnNums.push(num)
    for (const board of boards)
      if (isWinner(drawnNums, board))
        return drawnNums.at(-1) * getUncheckedSum(drawnNums, board)
  }
}

export default solvePart1
