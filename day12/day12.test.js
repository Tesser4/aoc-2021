
import {
  assertEquals,
  dirname,
  fromFileUrl,
  join,
} from '../deps.js'

import solvePart1 from './part1.js'
import solvePart2 from './part2.js'

const dirName = dirname(fromFileUrl(import.meta.url))
const example1FileData = await Deno.readTextFile(join(dirName, 'example1.txt'))
const example2FileData = await Deno.readTextFile(join(dirName, 'example2.txt'))
const example3FileData = await Deno.readTextFile(join(dirName, 'example3.txt'))
const inputFileData = await Deno.readTextFile(join(dirName, 'input.txt'))

Deno.test('Day 12 (Passage Pathing) - Part 1 example 1', () => {
  const result = solvePart1(example1FileData)
  const expected = 10

  assertEquals(result, expected)
})

Deno.test('Day 12 (Passage Pathing) - Part 1 example 2', () => {
  const result = solvePart1(example2FileData)
  const expected = 19

  assertEquals(result, expected)
})

Deno.test('Day 12 (Passage Pathing) - Part 1 example 3', () => {
  const result = solvePart1(example3FileData)
  const expected = 226

  assertEquals(result, expected)
})

Deno.test('Day 12 (Passage Pathing) - Part 1 input', () => {
  const result = solvePart1(inputFileData)
  const expected = 4773

  assertEquals(result, expected)
})

Deno.test('Day 12 (Passage Pathing) - Part 2 example 1', () => {
  const result = solvePart2(example1FileData)
  const expected = 36

  assertEquals(result, expected)
})

Deno.test('Day 12 (Passage Pathing) - Part 2 example 2', () => {
  const result = solvePart2(example2FileData)
  const expected = 103

  assertEquals(result, expected)
})

Deno.test('Day 12 (Passage Pathing) - Part 2 example 3', () => {
  const result = solvePart2(example3FileData)
  const expected = 3509

  assertEquals(result, expected)
})

Deno.test('Day 12 (Passage Pathing) - Part 2 input', () => {
  const result = solvePart2(inputFileData)
  const expected = 116985

  assertEquals(result, expected)
})
