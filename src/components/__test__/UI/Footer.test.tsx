import Footer from '@/components/UI/Footer'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
  test('it renders correct text', () => {
    render(<Footer />)
    expect(screen.getByText('© 2023 Michiru.I')).toBeInTheDocument()
  })
})
