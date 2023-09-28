import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '@/components/UI/Button'

describe('generalButton', () => {
  test('it has one button', () => {
    render(<Button text='Click Me!' onClick={() => {}} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument
  })

  test('it displays the correct text', () => {
    const testText = 'click me!'
    render(<Button text={testText} onClick={() => {}} />)
    const button = screen.getByText(testText)
    expect(button).toBeInTheDocument()
  })

  test('it calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button text='Click Me!' onClick={handleClick} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})
