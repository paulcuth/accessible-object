import { AccessibleObject } from "../types";

const VALID_ARIA_VALUES = ["polite", "assertive"];

export const name = "live";

export const resolver = (result: AccessibleObject, element: Element) => {
  const attrValue = element.getAttribute("aria-live");
  if (attrValue == null || attrValue === "" || attrValue === "off") {
    return null;
  }

  return attrValue === "assertive" ? attrValue : "polite";
};
