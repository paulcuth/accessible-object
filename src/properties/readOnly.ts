import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import getBooleanHtmlAttributeValue from "../utils/getBooleanHtmlAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = [
  "checkbox",
  "combobox",
  "grid",
  "gridcell",
  "listbox",
  "radiogroup",
  "slider",
  "spinbutton",
  "textbox",
  "columnheader",
  "menuitemcheckbox",
  "menuitemradio",
  "rowheader",
  "searchbox",
  "switch",
  "treegrid",
];

export const name = "readOnly";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  return (
    getBooleanHtmlAttributeValue(element, "readonly") ||
    getBooleanAriaAttributeValue(element, "aria-readonly") ||
    null
  );
};
