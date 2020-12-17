import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import getBooleanHtmlAttributeValue from "../utils/getBooleanHtmlAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = [
  "combobox",
  "gridcell",
  "listbox",
  "radiogroup",
  "spinbutton",
  "textbox",
  "tree",
  "columnheader",
  "rowheader",
  "searchbox",
  "treegrid",
];

export const name = "required";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  return (
    getBooleanHtmlAttributeValue(element, "required") ||
    getBooleanAriaAttributeValue(element, "aria-required") ||
    null
  );
};
