import { render, screen } from '@testing-library/react'
import BackToHomeButton from '@/components/UI/BackToHomeButton'
import '@testing-library/jest-dom'

// const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter>

// Next.jsのRouterをモックする
// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }))

describe('BackToHomeButton', () => {
  test('it renders the home icon', () => {
    render(<BackToHomeButton />)
    const link = screen.getByRole('link')
    const svg = screen.getByTestId('homeSvgIcon')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    expect(link).toContainElement(svg)
  })

  //   test('it links to the home page', () => {
  //     const push = jest.fn()
  //     mockedUseRouter.mockReturnValue({
  //       push,
  //     } as unknown as NextRouter)

  //     render(<BackToHomeButton />)
  //     const link = screen.getByRole('link')
  //     link.click()

  //     expect(push).toHaveBeenCalledWith('/')
  //   })
})
