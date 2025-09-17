import { getFile } from "@sanity/asset-utils";
import { dataset, projectId } from "../env";

export const urlForFile = (source: any): string | null => {
  if (!source) return null;

  const file = getFile(source, { projectId, dataset });
  return file?.asset?.url || null;
};
