import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import getBooleanHtmlAttributeValue from "../utils/getBooleanHtmlAttributeValue";
import { AccessibleObject } from "../types";

export const name = "disabled";

export const resolver = (result: AccessibleObject, element: Element) => {
  return (
    getBooleanHtmlAttributeValue(element, "disabled") ||
    getBooleanAriaAttributeValue(element, "aria-disabled") ||
    null
  );
};
