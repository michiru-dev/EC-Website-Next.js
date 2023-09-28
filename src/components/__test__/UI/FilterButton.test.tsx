import FilterButton from '@/components/UI/FilterButton'
import { categoryArr } from '@/const/selectOptions'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

describe('FilterButton', () => {
  //モック関数。なんでもない関数
  const mockHandleOnChange = jest.fn()

  beforeEach(() => {
    render(<FilterButton handleOnchange={mockHandleOnChange} />)
  })

  test('renders correctly', () => {
    expect(screen.getByText('カテゴリ別表示:')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()

    categoryArr.forEach((category) => {
      expect(screen.getByText(category.jp)).toBeInTheDocument()
    })
  })

  test('calls handleOnChange on select value change', () => {
    const selectElement = screen.getByRole('combobox')
    fireEvent.change(selectElement, { target: { value: 'someValue' } })
    expect(mockHandleOnChange).toHaveBeenCalled()
  })
})
