
import {
  assertEquals,
  dirname,
  fromFileUrl,
  join,
} from '../deps.js'

import solvePart1 from './part1.js'
// import solvePart2 from './part2.js'

const dirName = dirname(fromFileUrl(import.meta.url))
const exampleFileData = await Deno.readTextFile(join(dirName, 'example.txt'))
const inputFileData = await Deno.readTextFile(join(dirName, 'input.txt'))

Deno.test('Day 13 (Transparent Origami) - Part 1 - Example', () => {
  const result = solvePart1(exampleFileData)
  const expected = 17

  assertEquals(result, expected)
})

Deno.test('Day 13 (Transparent Origami) - Part 1 - Input', () => {
  const result = solvePart1(inputFileData)
  const expected = 712

  assertEquals(result, expected)
})

Deno.test('Day 13 (Transparent Origami) - Part 2 - Example', () => {
  // console.table(solvePart2(exampleFileData))
  // Expected optical result after folds: A square
})

Deno.test('Day 13 (Transparent Origami) - Part 2 - Input', () => {
  // console.table(solvePart2(inputFileData))
  // Expected optical result after folds: 'BLHFJPJF'
})
