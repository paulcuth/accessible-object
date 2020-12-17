export default (element: Element, attr: string) => {
  const id = element.getAttribute(attr);
  if (id == null) {
    return null;
  }

  return document.getElementById(id);
};
