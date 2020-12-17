import { AccessibleObject } from "../types";
import getIntegerAttributeValue from "../utils/getIntegerAttributeValue";

const VALID_ROLES = ["cell", "row", "columnheader", "gridcell", "rowheader"];

export const name = "colIndex";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // Return integer value
  return getIntegerAttributeValue(element, "aria-colindex", { min: 0 });
};
