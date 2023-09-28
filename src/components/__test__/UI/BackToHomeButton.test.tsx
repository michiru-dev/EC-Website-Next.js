import { fireEvent, render, screen } from '@testing-library/react'
import BackToHomeButton from '@/components/UI/BackToHomeButton'
import '@testing-library/jest-dom'
import { NextRouter, useRouter } from 'next/router'
import { ReactNode } from 'react'

// Next.jsのRouterをモックする
// const mockPush = jest.fn()
// jest.mock('next/link', () => ({
//   useRouter: jest.fn().mockReturnValue({ push: mockPush }),
// }))
// jest.mock(
//   'next/link',
//   () =>
//     ({ children }: { children: ReactNode }) =>
//       children
// )

describe('BackToHomeButton', () => {
  test('it renders the home icon', () => {
    render(<BackToHomeButton />)
    const link = screen.getByRole('link')
    const svg = screen.getByTestId('homeSvgIcon')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    expect(link).toContainElement(svg)
  })

  // test('it links to the home page', () => {
  //   render(<BackToHomeButton />)
  //   const link = screen.getByRole('link')
  //   fireEvent.click(link)

  //   expect(link).toHaveBeenCalledWith('/')
  // })
})
