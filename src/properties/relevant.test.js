// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('relevant', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(false)
  })

  it(`doesn't have property when added to non-live region`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-relevant="all" />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(false)
  })

  it(`has property when added to live region`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="polite" aria-relevant="all" />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
  })

  it(`defaults to additions + text`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="polite" />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
    expect(accessibleObject.relevant).toHaveLength(2)
    expect(accessibleObject.relevant).toContain('additions')
    expect(accessibleObject.relevant).toContain('text')
  })

  it(`can be set to additions only`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div
        data-testid="subject"
        aria-live="polite"
        aria-relevant="additions"
      />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
    expect(accessibleObject.relevant).toHaveLength(1)
    expect(accessibleObject.relevant).toContain('additions')
  })

  it(`can be set to text only`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="polite" aria-relevant="text" />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
    expect(accessibleObject.relevant).toHaveLength(1)
    expect(accessibleObject.relevant).toContain('text')
  })

  it(`can be set to removals only`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-live="polite" aria-relevant="removals" />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
    expect(accessibleObject.relevant).toHaveLength(1)
    expect(accessibleObject.relevant).toContain('removals')
  })

  it(`can be set to removals + text`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div
        data-testid="subject"
        aria-live="polite"
        aria-relevant="removals text"
      />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
    expect(accessibleObject.relevant).toHaveLength(2)
    expect(accessibleObject.relevant).toContain('removals')
    expect(accessibleObject.relevant).toContain('text')
  })

  it(`can be set to additions + removals`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div
        data-testid="subject"
        aria-live="polite"
        aria-relevant="removals additions"
      />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
    expect(accessibleObject.relevant).toHaveLength(2)
    expect(accessibleObject.relevant).toContain('removals')
    expect(accessibleObject.relevant).toContain('additions')
  })

  it(`can be set to additions + removals + text`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div
        data-testid="subject"
        aria-live="polite"
        aria-relevant="removals additions text"
      />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
    expect(accessibleObject.relevant).toHaveLength(3)
    expect(accessibleObject.relevant).toContain('removals')
    expect(accessibleObject.relevant).toContain('additions')
    expect(accessibleObject.relevant).toContain('text')
  })

  it(`can be set to all`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div
        data-testid="subject"
        aria-live="polite"
        aria-relevant="removals additions text"
      />,
    )
    expect(accessibleObject.hasOwnProperty('relevant')).toBe(true)
    expect(accessibleObject.relevant).toHaveLength(3)
    expect(accessibleObject.relevant).toContain('removals')
    expect(accessibleObject.relevant).toContain('additions')
    expect(accessibleObject.relevant).toContain('text')
  })
})
