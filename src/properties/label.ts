import { AccessibleObject } from "../types";

export const name = "label";

export const resolver = (result: AccessibleObject, element: Element) => {
  const attrValue = element.getAttribute("aria-label");
  return attrValue == null || attrValue === "" ? null : attrValue;
};
