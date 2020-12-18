import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = [
  "gridcell",
  "option",
  "row",
  "tab",
  "columnheader",
  "rowheader",
  "treeitem",
];

export const name = "selected";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  const ariaValue = element.getAttribute("aria-selected");

  // If aria value is "false", return boolean
  if (ariaValue === "false") {
    return false;
  }

  // Otherwise return true or null
  return getBooleanAriaAttributeValue(element, "aria-selected");
};
