import { getRole } from "dom-accessibility-api";

import { AccessibleObject } from "../types";
import getIntegerAttributeValue from "../utils/getIntegerAttributeValue";

const VALID_ROLES = ["table", "grid", "treegrid"];

export const name = "rowCount";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // If there's an aria value, return that
  const ariaValue = getIntegerAttributeValue(element, "aria-rowcount", {
    min: -1,
  });
  if (ariaValue != null) {
    return ariaValue;
  }

  // Compute the row count
  return computeRowCount(element);
};

const computeRowCount = (element: Element): number => {
  const children = Array.from(element.children);
  return children.reduce((result, child) => {
    const role = getRole(child);
    switch (role) {
      case "row":
        return result + 1;
      case "rowgroup":
        return result + computeRowCount(child);
      default:
        return result;
    }
  }, 0);
};
