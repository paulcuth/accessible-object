import { getRole } from "dom-accessibility-api";

import { AccessibleObject } from "../types";
import getIntegerAttributeValue from "../utils/getIntegerAttributeValue";

import findSetSiblings, {
  VALID_SET_CHILD_ROLES,
} from "../utils/findSetSiblings";

export const name = "setSize";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_SET_CHILD_ROLES.includes(role)) {
    return null;
  }

  // If there's an aria value, return that
  const ariaValue = getIntegerAttributeValue(element, "aria-setsize", {
    min: -1,
  });
  if (ariaValue != null && ariaValue !== 0) {
    return ariaValue;
  }

  // Compute the position:
  const siblings = findSetSiblings(element);
  return siblings == null ? null : siblings.length;
};
