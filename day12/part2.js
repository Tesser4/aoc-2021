
import parse from './parse.js'

const isSmall = (cave) => cave === cave.toLowerCase()
const isVisited = (times) => (cave, visited) =>
  visited.filter(x => x === cave).length === times
const hasDuplicateSmallVisit = (visited) =>
  visited.filter(isSmall).length !== [...new Set(visited.filter(isSmall))].length
const isVisitedOnce = isVisited(1)
const isVisitedTwice = isVisited(2)

const getNumOfPaths = (cave, adjList, visited = ['start']) => {
  if (cave === 'end')
    return 1
  let count = 0
  for (const neighbor of adjList[cave].filter(x => x !== 'start')) {
    if (isSmall(neighbor)) {
      if (isVisitedTwice(neighbor, visited))
        continue
      if (isVisitedOnce(neighbor, visited) && hasDuplicateSmallVisit(visited))
        continue
    }

    count += getNumOfPaths(neighbor, adjList, [...visited, neighbor])
  }

  return count
}

const solvePart2 = (fileData) => {
  const adjList = parse(fileData)

  return getNumOfPaths('start', adjList)
}

export default solvePart2
