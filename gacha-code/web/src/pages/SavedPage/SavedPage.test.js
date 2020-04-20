import { render, cleanup } from '@testing-library/react'

import SavedPage from './SavedPage'

describe('SavedPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SavedPage />)
    }).not.toThrow()
  })
})
