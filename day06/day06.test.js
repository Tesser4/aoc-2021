
import {
  assertEquals,
  dirname,
  fromFileUrl,
  join,
} from '../deps.js'

import solvePart1 from './part1.js'
import solvePart2 from './part2.js'

const dirName = dirname(fromFileUrl(import.meta.url))
const exampleFileData = await Deno.readTextFile(join(dirName, 'example.txt'))
const inputFileData = await Deno.readTextFile(join(dirName, 'input.txt'))

Deno.test('Day 6 (Lanternfish) - Part 1 example', () => {
  const result = solvePart1(exampleFileData)
  const expected = 5934

  assertEquals(result, expected)
})

Deno.test('Day 6 (Lanternfish) - Part 1 input', () => {
  const result = solvePart1(inputFileData)
  const expected = 365862

  assertEquals(result, expected)
})

Deno.test('Day 6 (Lanternfish) - Part 2 example', () => {
  const result = solvePart2(exampleFileData)
  const expected = 26984457539

  assertEquals(result, expected)
})

Deno.test('Day 6 (Lanternfish) - Part 2 input', () => {
  const result = solvePart2(inputFileData)
  const expected = 1653250886439

  assertEquals(result, expected)
})
