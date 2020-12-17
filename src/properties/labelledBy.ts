import mapToMultipleElementReferences from "../utils/mapToMultipleElementReferences";

export const name = "labelledBy";
export const resolver = mapToMultipleElementReferences("aria-labelledBy");
