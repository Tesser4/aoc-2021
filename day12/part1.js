
import parse from './parse.js'

const isSmall = (cave) => cave === cave.toLowerCase()
const isVisited = (cave, visited) => visited.includes(cave)

const getNumOfPaths = (cave, adjList, visited = ['start']) => {
  if (cave === 'end')
    return 1
  let count = 0
  const neighbors = adjList[cave]
    .filter(neighbor => !(isSmall(neighbor) && isVisited(neighbor, visited)))
  for (const neighbor of neighbors)
    count += getNumOfPaths(neighbor, adjList, [...visited, neighbor])

  return count
}

const solvePart1 = (fileData) => {
  const adjList = parse(fileData)

  return getNumOfPaths('start', adjList)
}

export default solvePart1
