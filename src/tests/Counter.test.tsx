import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import Counter from '../components/Counter'

test('renders counter with initial value', () => {
  render(<Counter initialValue={5} />)
  expect(screen.getByText('Count: 5')).toBeDefined()
})

test('increments count when plus button clicked', () => {
  render(<Counter initialValue={0} />)
  const incrementButton = screen.getByText('+')
  fireEvent.click(incrementButton)
  expect(screen.getByText('Count: 1')).toBeDefined()
})

test('decrements count when minus button clicked', () => {
  render(<Counter initialValue={5} />)
  const decrementButton = screen.getByText('-')
  fireEvent.click(decrementButton)
  expect(screen.getByText('Count: 4')).toBeDefined()
})

test('resets count when reset button clicked', () => {
  render(<Counter initialValue={10} />)
  const resetButton = screen.getByText('Reset')
  fireEvent.click(resetButton)
  expect(screen.getByText('Count: 10')).toBeDefined()
})