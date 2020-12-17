import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import getBooleanHtmlAttributeValue from "../utils/getBooleanHtmlAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = [
  "checkbox",
  "option",
  "radio",
  "switch",
  "menuitemcheckbox",
  "menuitemradio",
  "treeitem",
];

export const name = "checked";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // If aria value is "mixed", return that
  const ariaValue = element.getAttribute("aria-checked");
  if (ariaValue === "mixed") {
    return ariaValue;
  }

  // If aria value conflicts with native (HTML) semantics, native should be used
  if (
    element.tagName === "INPUT" &&
    ((element as HTMLInputElement).type === "checkbox" ||
      (element as HTMLInputElement).type === "radio")
  ) {
    return getBooleanHtmlAttributeValue(element, "checked") ?? false;
  }

  // Otherwise return aria value
  return getBooleanAriaAttributeValue(element, "aria-checked") ?? false;
};
