import { getRole } from "dom-accessibility-api";
import findParentWithRole from "../utils/findParentWithRole";
import getChildren from "../utils/getChildren";

const CHILD_ROLE_SET_MAP = {
  article: ["feed"],
  listitem: ["list", "group"],
  menuitem: ["menu", "menubar", "group"],
  option: ["listbox"],
  radio: ["radiogroup"],
  tab: ["tablist"],
  menuitemcheckbox: ["menu", "menubar"],
  menuitemradio: ["menu", "menubar", "group"],
  treeitem: ["tree", "group"],
};

const SET_CHILD_ROLE_MAP = {
  feed: ["article"],
  list: ["listitem", "group"],
  menu: ["menuitem", "menuitemcheckbox", "menuitemradio", "group"],
  listbox: ["option"],
  radiogroup: ["radio"],
  tablist: ["tab"],
  tree: ["treeitem", "group"],
};

export const VALID_SET_CHILD_ROLES = Object.keys(CHILD_ROLE_SET_MAP);

export default (element: Element): Array<Element> | null => {
  const role = getRole(element) as keyof typeof CHILD_ROLE_SET_MAP;
  const parentRoles = CHILD_ROLE_SET_MAP[role];
  const parent = findParentWithRole(element, parentRoles);

  // If no parent, we can't get siblings
  if (parent == null) {
    return null;
  }

  // Return siblings
  const parentRole = parentRoles[0] as keyof typeof SET_CHILD_ROLE_MAP;
  const siblingRoles = SET_CHILD_ROLE_MAP[parentRole];
  const children = getChildren(parent);

  return children.filter((child) => {
    const role = getRole(child);
    return role != null && siblingRoles.includes(role);
  });
};
