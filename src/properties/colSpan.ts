import getIntegerAttributeValue from "../utils/getIntegerAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = ["cell", "columnheader", "gridcell", "rowheader"];

export const name = "colSpan";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // Use native semantic values over aria values where relevant
  if (element.tagName === "TH" || element.tagName === "TD") {
    return getIntegerAttributeValue(element, "colspan", { min: 1 }) ?? 1;
  }

  // Otherwise return aria value
  return getIntegerAttributeValue(element, "aria-colspan", { min: 1 });
};
