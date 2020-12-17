export default (element: Element, attr: string): Array<Element> | null => {
  const id = element.getAttribute(attr);
  if (id == null) {
    return null;
  }

  const ids = id.split(" ");
  const elements = ids.map((id) => document.getElementById(id));

  // @ts-ignore
  return elements.filter((e) => e != null);
};
