import getMultipleElementReferences from "../utils/getMultipleElementReferences";

export default (element: Element): Array<Element> => {
  const domChildren = Array.from(element.children);
  const ownedChildren =
    getMultipleElementReferences(element, "aria-owns") ?? [];

  return [...domChildren, ...ownedChildren];
};
