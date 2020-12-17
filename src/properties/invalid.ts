import getEnumAttributeValue from "../utils/getEnumAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ARIA_VALUES = ["spelling", "grammar"];

export const name = "invalid";

export const resolver = (result: AccessibleObject, element: Element) => {
  const nativeValue = !((element as HTMLInputElement).validity?.valid ?? true);
  if (nativeValue) {
    return true;
  }

  const attrValue = element.getAttribute("aria-invalid");
  if (attrValue == null || attrValue === "") {
    return null;
  }

  const ariaValue = getEnumAttributeValue(
    element,
    "aria-invalid",
    VALID_ARIA_VALUES
  );

  return ariaValue ?? true;
};
