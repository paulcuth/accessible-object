import getEnumAttributeValue from "../utils/getEnumAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ARIA_VALUES = ["page", "step", "location", "date", "time"];

export const name = "current";

export const resolver = (result: AccessibleObject, element: Element) => {
  const attrValue = element.getAttribute("aria-current");
  if (attrValue == null || attrValue === "") {
    return null;
  }

  const ariaValue = getEnumAttributeValue<typeof VALID_ARIA_VALUES[number]>(
    element,
    "aria-current",
    VALID_ARIA_VALUES
  );

  return ariaValue ?? true;
};
