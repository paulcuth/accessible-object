import isElementFocusable from "../utils/isElementFocusable";
import { AccessibleObject } from "../types";

export const name = "focusable";

export const resolver = (result: AccessibleObject, element: Element) => {
  return isElementFocusable(element);
};
