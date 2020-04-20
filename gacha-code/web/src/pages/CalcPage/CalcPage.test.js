import { render, cleanup } from '@testing-library/react'

import CalcPage from './CalcPage'

describe('CalcPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CalcPage />)
    }).not.toThrow()
  })
})
