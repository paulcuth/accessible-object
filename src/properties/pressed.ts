import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = ["button"];

export const name = "pressed";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  const ariaValue = element.getAttribute("aria-pressed");

  // If aria value is "mixed", return that
  if (ariaValue === "mixed") {
    return ariaValue;
  }

  // If aria value is "mixed", return boolean
  if (ariaValue === "false") {
    return false;
  }

  // Otherwise return true or null
  return getBooleanAriaAttributeValue(element, "aria-pressed");
};
