export type Options = {
  min?: number;
  max?: number;
  default?: number | null;
};

export default (element: Element, attr: string, options: Options = {}) => {
  const { min, max } = options;
  const value = parseInt(element.getAttribute(attr) ?? "", 10);

  const isValid =
    !isNaN(value) &&
    (min == null || value >= min) &&
    (max == null || value <= max);

  if (isValid) {
    return value;
  }

  return options.default ?? null;
};
