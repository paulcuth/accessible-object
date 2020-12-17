import getBooleanAriaAttributeValue from "../utils/getBooleanAriaAttributeValue";
import { AccessibleObject } from "../types";

const VALID_ROLES = [
  "button",
  "combobox",
  "document",
  "link",
  "section",
  "sectionhead",
  "window",
  "alert",
  "alertdialog",
  "article",
  "banner",
  "cell",
  "columnheader",
  "complementary",
  "contentinfo",
  "definition",
  "dialog",
  "directory",
  "feed",
  "figure",
  "form",
  "grid",
  "gridcell",
  "group",
  "heading",
  "img",
  "landmark",
  "list",
  "listbox",
  "listitem",
  "log",
  "main",
  "marquee",
  "math",
  "menu",
  "menubar",
  "navigation",
  "note",
  "progressbar",
  "radiogroup",
  "region",
  "row",
  "rowheader",
  "search",
  "select",
  "status",
  "tab",
  "table",
  "tabpanel",
  "term",
  "timer",
  "toolbar",
  "tooltip",
  "tree",
  "treegrid",
  "treeitem",
];

export const name = "expanded";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // If attribute not present, return null
  if (!element.hasAttribute("aria-expanded")) {
    return null;
  }

  // Otherwise return a boolean
  return getBooleanAriaAttributeValue(element, "aria-expanded") ?? false;
};
