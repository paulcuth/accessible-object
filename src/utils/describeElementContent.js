// @flow

import { computeAccessibleName } from 'dom-accessibility-api'

import type { Element } from '../types'
import getImageFilename from './getImageFilename'

const BLOCK_STYLES = ['block', 'flow-root', 'table', 'flex', 'grid']

type Options = {
  abbreviate?: boolean,
  asParts?: boolean,
}

export default function describeElementContent(
  element: Element,
  options: Options = {},
): string {
  const { abbreviate = false, asParts = false } = options

  switch (element.nodeType) {
    case Node.TEXT_NODE:
      return element.textContent

    case Node.ELEMENT_NODE:
      if (element.tagName === 'IMG') {
        const accName = computeAccessibleName(element)
        const name = accName != '' ? accName : getImageFilename(element)
        return ` ${name} `
      }

      const label = element.getAttribute('aria-label')
      if (label != null) {
        return label
      }

      const childContent = [...element.childNodes].map(child => {
        const content = describeElementContent(child, { asParts: true })
        if (child.nodeType !== Node.ELEMENT_NODE) {
          return content
        }
        const style = window.getComputedStyle(child)
        const isBlock = BLOCK_STYLES.includes(style.getPropertyValue('display'))
        return isBlock ? `\n${content}\n` : content
      })

      const parts = childContent
        .join('')
        .trim()
        .split(/\n+/g)

      return resolveParts(parts, options)

    default:
      return ''
  }
}

export const resolveParts = (parts: Array<string>, options: Options = {}) => {
  const { abbreviate, asParts } = options

  if (abbreviate && parts.length == 2) {
    return `${parts[0]} and one more item`
  }

  if (abbreviate && parts.length > 2) {
    return `${parts[0]} and ${parts.length - 1} more items`
  }

  if (asParts) {
    return parts.join('\n')
  }

  return parts.join(' ')
}
