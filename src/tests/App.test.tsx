import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'

test('renders React SPA heading', () => {
  render(<App />)
  const heading = screen.getByText(/React SPA/i)
  expect(heading).toBeDefined()
})

test('renders counter component', () => {
  render(<App />)
  const counterHeading = screen.getByText(/Counter Component/i)
  expect(counterHeading).toBeDefined()
})