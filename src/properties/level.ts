import getIntegerAttributeValue from "../utils/getIntegerAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = [
  "grid",
  "heading",
  "listitem",
  "row",
  "tablist",
  "treegrid",
  "treeitem",
];

export const name = "level";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // Otherwise return aria value
  return getIntegerAttributeValue(element, "aria-level", { min: 1 });
};
