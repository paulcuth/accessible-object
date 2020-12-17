import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import getBooleanHtmlAttributeValue from "../utils/getBooleanHtmlAttributeValue";
import { AccessibleObject } from "../types";

export const name = "roleDescription";

export const resolver = (result: AccessibleObject, element: Element) => {
  if (result.role == null) {
    return null;
  }

  const value = element.getAttribute("aria-roledescription");
  if (value == null || value.trim() === "") {
    return null;
  }

  return value;
};
