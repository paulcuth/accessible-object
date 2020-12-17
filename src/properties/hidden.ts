import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import getBooleanHtmlAttributeValue from "../utils/getBooleanHtmlAttributeValue";
import { AccessibleObject } from "../types";

export const name = "hidden";

export const resolver = (result: AccessibleObject, element: Element) => {
  return (
    getBooleanAriaAttributeValue(element, "aria-hidden") ||
    getBooleanHtmlAttributeValue(element, "hidden") ||
    hasHiddenStyle(element) ||
    null
  );
};

const hasHiddenStyle = (element: Element) => {
  const style = window.getComputedStyle(element);
  return style.display === "none" || style.visibility === "hidden";
};
