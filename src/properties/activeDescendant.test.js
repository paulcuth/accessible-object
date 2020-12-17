// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('activeDescendant', () => {
  it(`doesn't have activeDescendant when none specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject"></div>,
    )
    expect(accessibleObject.hasOwnProperty('activeDescendant')).toBe(false)
  })

  it(`doesn't have activeDescendant when used as boolean`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-activedescendant></div>,
    )
    expect(accessibleObject.hasOwnProperty('activeDescendant')).toBe(false)
  })

  it(`doesn't have activeDescendant when id is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-activedescendant="no-element"></div>,
    )
    expect(accessibleObject.hasOwnProperty('activeDescendant')).toBe(false)
  })

  it(`has activeDescendant when value is a valid id`, async () => {
    const { accessibleObject, getByTestId } = renderAndComputeAccessibleObject(
      <>
        <div data-testid="subject" aria-activedescendant="desc"></div>
        <div id="desc" data-testid="desc"></div>
      </>,
    )
    expect(accessibleObject.hasOwnProperty('activeDescendant')).toBe(true)
    expect(accessibleObject.activeDescendant).toBe(getByTestId('desc'))
  })
})
