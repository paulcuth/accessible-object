import getEnumAttributeValue from "../utils/getEnumAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = ["rowheader", "colheader"];
const VALID_ARIA_VALUES = ["ascending", "descending", "other", "none"];

export const name = "sort";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // Aria value takes precedence...
  const ariaValue = getEnumAttributeValue(
    element,
    "aria-sort",
    VALID_ARIA_VALUES
  );

  return ariaValue ?? "none";
};
