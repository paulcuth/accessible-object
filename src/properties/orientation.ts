import getEnumAttributeValue from "../utils/getEnumAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = [
  "combobox",
  "listbox",
  "menu",
  "menubar",
  "radiogroup",
  "scrollbar",
  "select",
  "separator",
  "slider",
  "tablist",
  "toolbar",
  "tree",
  "treegrid",
];

const ROLE_DEFAULT_VALUE_MAP = {
  listbox: "vertical",
  menu: "vertical",
  menubar: "horizontal",
  scrollbar: "vertical",
  separator: "horizontal",
  slider: "horizontal",
  tablist: "horizontal",
  toolbar: "horizontal",
  tree: "vertical",
};

const VALID_ARIA_VALUES = ["horizontal", "vertical"];

export const name = "orientation";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  const defaultValue =
    result.role != null &&
    ROLE_DEFAULT_VALUE_MAP[result.role as keyof typeof ROLE_DEFAULT_VALUE_MAP];

  return getEnumAttributeValue(element, "aria-orientation", VALID_ARIA_VALUES, {
    defaultValue,
  });
};
