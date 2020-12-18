import { getRole } from "dom-accessibility-api";

import getParents from "../utils/getParents";

export default function findParentWithRole(
  element: Element | null,
  roles: Array<string>
): Element | null {
  if (element == null) {
    return null;
  }

  const role = getRole(element);
  if (role != null && roles.includes(role)) {
    return element;
  }

  const parents = getParents(element);
  return parents.find((parent) => findParentWithRole(parent, roles)) ?? null;
}
