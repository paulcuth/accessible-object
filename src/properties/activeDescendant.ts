import mapToSingleElementReference from "../utils/mapToSingleElementReference";

export const name = "activeDescendant";
export const resolver = mapToSingleElementReference("aria-activedescendant");
