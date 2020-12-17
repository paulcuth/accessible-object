type Options<T> = {
  defaultValue?: T | null;
  mapInvalidValuesTo?: T | null;
};

export default <T extends string>(
  element: Element,
  attr: string,
  oneOf: readonly T[],
  options: Options<T> = {}
) => {
  const { defaultValue = null, mapInvalidValuesTo = null } = options;
  const value = element.getAttribute(attr);

  if (value == null || value == "") {
    return defaultValue;
  }

  const isMatch = oneOf.includes(value as T);
  if (isMatch) {
    return value;
  }

  return mapInvalidValuesTo ?? defaultValue;
};
