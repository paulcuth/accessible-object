import { AccessibleObject } from "../types";

export const name = "keyShortcuts";

export const resolver = (result: AccessibleObject, element: Element) => {
  const attrValue = element.getAttribute("aria-keyshortcuts");
  if (attrValue == null || attrValue === "") {
    return null;
  }

  return attrValue.split(" ");
};
