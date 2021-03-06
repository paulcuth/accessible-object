import { getRole } from "dom-accessibility-api";

import { AccessibleObject, Role } from "../types";
import getIntegerAttributeValue from "../utils/getIntegerAttributeValue";
import findSetSiblings, {
  VALID_SET_CHILD_ROLES,
} from "../utils/findSetSiblings";

export const name = "posInSet";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_SET_CHILD_ROLES.includes(role)) {
    return null;
  }

  // If there's an aria value, return that
  const ariaValue = getIntegerAttributeValue(element, "aria-posinset", {
    min: 1,
  });
  if (ariaValue != null) {
    return ariaValue;
  }

  // Return the position:
  const siblings = findSetSiblings(element);
  if (siblings == null) {
    return null;
  }

  const position = siblings.indexOf(element);
  return position === -1 ? null : position + 1;
};
