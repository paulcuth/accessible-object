export default (element: Element): Array<Element> => {
  return (
    findParentsByOwnership(element) ??
    (element.parentElement == null ? [] : [element.parentElement])
  );
};

const findParentsByOwnership = (element: Element): Array<Element> | null => {
  if (element.id == null || element.id == "") {
    return null;
  }

  const parents = document.querySelectorAll(`[aria-owns~=${element.id}]`);
  return parents.length === 0 ? null : Array.from(parents);
};
