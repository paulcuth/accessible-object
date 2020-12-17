import getSingleElementReference from "../utils/getSingleElementReference";
import { resolver as resolveInvalid } from "./invalid";
import { AccessibleObject } from "../types";

export const name = "errorMessage";

export const resolver = (result: AccessibleObject, element: Element) => {
  const isInvalid = resolveInvalid(result, element) != null;

  if (!isInvalid) {
    return null;
  }

  return getSingleElementReference(element, "aria-errormessage");
};
