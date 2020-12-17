import { AccessibleObject } from "../types";

const VALID_ROLES = ["textbox", "searchbox"];

export const name = "placeholder";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  if (element.tagName === "INPUT") {
    const htmlValue = element.getAttribute("placeholder");
    if (htmlValue != null && htmlValue !== "") {
      return htmlValue;
    }
  }

  const ariaValue = element.getAttribute("aria-placeholder");
  return ariaValue == null || ariaValue === "" ? null : ariaValue;
};
