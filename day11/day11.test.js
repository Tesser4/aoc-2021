
import {
  assertEquals,
} from '../deps.js'
import {
  dirname,
  fromFileUrl,
  join,
} from '../deps.js'

import solvePart1 from './part1.js'
import solvePart2 from './part2.js'

const dirName = dirname(fromFileUrl(import.meta.url))
const exampleFileData = await Deno.readTextFile(join(dirName, 'example.txt'))
const inputFileData = await Deno.readTextFile(join(dirName, 'input.txt'))

Deno.test('Day 11 (Dumbo Octopus) - Part 1 - Example', () => {
  const result = solvePart1(exampleFileData)
  const expected = 1656

  assertEquals(result, expected)
})

Deno.test('Day 11 (Dumbo Octopus) - Part 1 - Input', () => {
  const result = solvePart1(inputFileData)
  const expected = 1659

  assertEquals(result, expected)
})

Deno.test('Day 11 (Dumbo Octopus) - Part 2 - Example', () => {
  const result = solvePart2(exampleFileData)
  const expected = 195

  assertEquals(result, expected)
})

Deno.test('Day 11 (Dumbo Octopus) - Part 2 - Input', () => {
  const result = solvePart2(inputFileData)
  const expected = 227

  assertEquals(result, expected)
})
