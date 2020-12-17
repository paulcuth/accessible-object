import mapToMultipleElementReferences from "../utils/mapToMultipleElementReferences";

export const name = "describedBy";
export const resolver = mapToMultipleElementReferences("aria-describedBy");
