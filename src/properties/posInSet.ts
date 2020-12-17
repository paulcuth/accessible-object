import { getRole } from "dom-accessibility-api";

import { AccessibleObject, Role } from "../types";
import getIntegerAttributeValue from "../utils/getIntegerAttributeValue";
import getChildren from "../utils/getChildren";
import getParents from "../utils/getParents";

const ROLE_PARENT_MAP = {
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

const PARENT_CHILD_ROLE_MAP = {
  feed: ["article"],
  list: ["listitem", "group"],
  menu: ["menuitem", "menuitemcheckbox", "menuitemradio", "group"],
  listbox: ["option"],
  radiogroup: ["radio"],
  tablist: ["tab"],
  tree: ["treeitem", "group"],
};

const VALID_ROLES = Object.keys(ROLE_PARENT_MAP);

export const name = "posInSet";

export const resolver = (result: AccessibleObject, element: Element) => {
  const { role } = result;

  // Only add to valid roles
  if (role == null || !VALID_ROLES.includes(role)) {
    return null;
  }

  // If there's an aria value, return that
  const ariaValue = getIntegerAttributeValue(element, "aria-posinset", {
    min: 1,
  });
  if (ariaValue != null) {
    return ariaValue;
  }

  // Compute the position:

  // Find the element with the matching parent role
  const parentRoles = ROLE_PARENT_MAP[role as keyof typeof ROLE_PARENT_MAP];
  const parent = findParent(element, parentRoles);
  // findParentByOwnership(element, parentRoles) ??
  // findParentByDOM(element.parentElement, parentRoles);

  // If no parent, we can't compute the position
  if (parent == null) {
    return null;
  }

  // Find siblings
  const siblingRoles =
    PARENT_CHILD_ROLE_MAP[parentRoles[0] as keyof typeof PARENT_CHILD_ROLE_MAP];
  const siblings = findSiblings(parent, siblingRoles);
  const position = siblings.indexOf(element);

  return position === -1 ? null : position + 1;
};

const findParent = (
  element: Element | null,
  parentRoles: Array<string>
): Element | null => {
  if (element == null) {
    return null;
  }

  const role = getRole(element);
  if (role != null && parentRoles.includes(role)) {
    return element;
  }

  const parents = getParents(element);
  return parents.find((parent) => findParent(parent, parentRoles)) ?? null;
};

// const findParentByDOM = (
//   element: Element | null,
//   parentRoles: Array<string>
// ): Element | null => {
//   if (element == null) {
//     return null;
//   }

//   const role = getRole(element);
//   if (role != null && parentRoles.includes(role)) {
//     return element;
//   }

//   return findParentByDOM(element.parentElement, parentRoles);
// };

// const findParentByOwnership = (
//   element: Element,
//   parentRoles: Array<string>
// ): Element | null => {
//   if (element.id == null || element.id == "") {
//     return null;
//   }

//   const parents = document.querySelectorAll(`[aria-owns~=${element.id}]`);

//   return Array.from(parents).find((parent) => {
//     const role = getRole(parent);
//     return role != null && parentRoles.includes(role);
//   });
// };

const findSiblings = (parent: Element, roles: Array<string>) => {
  const children = getChildren(parent);

  return children.filter((child) => {
    const role = getRole(child);
    return role != null && roles.includes(role);
  });
};
