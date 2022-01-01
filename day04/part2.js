
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

const areSameBoards = (board1, board2) => {
  const b1 = board1.flat()
  const b2 = board2.flat()
  for (let i = 0; i < b1.length; i += 1)
    if (b1[i] !== b2[i])
      return false
  return true
}

const removeWinnerBoard = (boards, winnerBoard) => boards
  .filter(board => !areSameBoards(board, winnerBoard))

const solvePart2 = (fileData) => {
  let { nums, boards } = parse(fileData)
  const drawnNums = []
  for (const num of nums) {
    drawnNums.push(num)
    for (const board of boards) {
      if (isWinner(drawnNums, board)) {
        if (boards.length === 1)
          return drawnNums.at(-1) * getUncheckedSum(drawnNums, boards.at(0))
        boards = removeWinnerBoard(boards, board)
      }
    }
  }
}

export default solvePart2
