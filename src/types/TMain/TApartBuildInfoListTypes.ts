export type ApartBuildInfoTitle =
  | "completionDate"
  | "constructor"
  | "developer"
  | "numberOfUnits";

export type TApartBuildInfoList = {
  title?: ApartBuildInfoTitle;
  data?: string | number;
};
