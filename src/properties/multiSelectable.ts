import mapBooleanAriaAttribute from "../utils/mapBooleanAriaAttribute";

const VALID_ROLES = ["grid", "listbox", "tablist", "tree", "treegrid"];

export const name = "multiSelectable";

export const resolver = mapBooleanAriaAttribute("aria-multiselectable", {
  roles: VALID_ROLES,
});
