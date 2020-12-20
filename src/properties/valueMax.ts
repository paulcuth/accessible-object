import isElementFocusable from "../utils/isElementFocusable";
import { AccessibleObject } from "../types";

const VALID_ROLES = [
  "range",
  "scrollbar",
  "separator",
  "slider",
  "spinbutton",
  "progressbar",
];

const INPUT_TYPES_WITH_NATIVE_MAX = [
  "date",
  "month",
  "week",
  "time",
  "datetime-local",
  "number",
  "range",
];

export const name = "valueMax";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // Seperator role is only valid if it's a widget (focusable)
  if (role === "separator" && !isElementFocusable(element)) {
    return null;
  }

  // If aria value conflicts with native (HTML) semantics, native should be used
  if (elementHasNativeMax(element) && element.hasAttribute("max")) {
    const htmlValue = parseFloat(element.getAttribute("max") ?? "");
    if (!isNaN(htmlValue)) {
      return htmlValue;
    }
  }

  // Otherwise return aria value
  const ariaValue = parseFloat(element.getAttribute("aria-valuemax") ?? "");
  return isNaN(ariaValue) ? null : ariaValue;
};

const elementHasNativeMax = (element: Element): boolean => {
  const { tagName, type } = element as HTMLInputElement;
  if (tagName === "PROGRESS" || tagName === "METER") {
    return true;
  }

  if (tagName !== "INPUT") {
    return false;
  }

  return INPUT_TYPES_WITH_NATIVE_MAX.includes(type);
};
