// @flow strict

import React from 'react'

import computeAccessibleObject from '../'
import renderAndComputeAccessibleObject from '../utils/renderAndComputeAccessibleObject'

describe('placeholder', () => {
  it(`doesn't have property when attribute not specified`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="textbox" data-testid="subject" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(false)
  })

  it(`doesn't have property when attribute set to empty string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="textbox" data-testid="subject" aria-placeholder="" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(false)
  })

  it(`has property when attribute set to string and role is textbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="textbox" data-testid="subject" aria-placeholder="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(true)
    expect(accessibleObject.placeholder).toBe('moo')
  })

  it(`has property when attribute set to string and role is search box`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="textbox" data-testid="subject" aria-placeholder="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(true)
    expect(accessibleObject.placeholder).toBe('moo')
  })

  it(`doesn't have property when attribute set to string and role invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div data-testid="subject" aria-placeholder="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(false)
  })

  it(`has property when attribute set to string and native role is textbox`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" aria-placeholder="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(true)
    expect(accessibleObject.placeholder).toBe('moo')
  })

  it(`has property when native attribute is set to string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" placeholder="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(true)
    expect(accessibleObject.placeholder).toBe('moo')
  })

  it(`has property when native attribute is set to string`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" placeholder="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(true)
    expect(accessibleObject.placeholder).toBe('moo')
  })

  it(`doesn't have property when native attribute is invalid`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <div role="textbox" data-testid="subject" placeholder="moo" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(false)
  })

  it(`gives precedence to the native attribute value`, async () => {
    const { accessibleObject } = renderAndComputeAccessibleObject(
      <input data-testid="subject" placeholder="moo" aria-placeholder="baa" />,
    )
    expect(accessibleObject.hasOwnProperty('placeholder')).toBe(true)
    expect(accessibleObject.placeholder).toBe('moo')
  })
})
