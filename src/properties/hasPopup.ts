import getEnumAttributeValue from "../utils/getEnumAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ARIA_VALUES = ["menu", "listbox", "tree", "grid", "dialog"];

export const name = "hasPopup";

export const resolver = (result: AccessibleObject, element: Element) => {
  const attrValue = element.getAttribute("aria-haspopup");

  // Not present if attribute has no value
  if (attrValue == null || attrValue === "") {
    return null;
  }

  // Maps true to menu for backwards compatibility
  if (attrValue === "true") {
    return "menu";
  }

  // Else only return valid values
  return getEnumAttributeValue(element, "aria-haspopup", VALID_ARIA_VALUES);
};
