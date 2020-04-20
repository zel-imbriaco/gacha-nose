import { render, cleanup } from '@testing-library/react'

import NavbarLayout from './NavbarLayout'

describe('NavbarLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NavbarLayout />)
    }).not.toThrow()
  })
})
