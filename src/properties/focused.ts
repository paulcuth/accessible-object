import isElementFocusable from "../utils/isElementFocusable";
import { AccessibleObject } from "../types";

export const name = "focused";

export const resolver = (result: AccessibleObject, element: Element) => {
  if (!result.focusable) {
    return null;
  }

  return document.activeElement === element;
};
