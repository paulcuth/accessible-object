export default (element: Element, attr: string) => {
  const value = element.getAttribute(attr);
  return value == null ? null : true;
};
