export type TWeakAptInfo = {
  name: string;
  address: string;
  zipCode: string;
};

export type TWeakBasicInfo = {
  completionDate: string;
  numberOfUnits: number;
  desgnr: string; // 설계사
  cnstEntrprs: string; // 시공사
  sprvsr: string; // 감리사
};

export type TWeakbuildInfo = {
  buildStru: string;
  defectType: string;
};

export type TWeakSplmnInfo = {
  reinfStatus: string;
  reinfContent: string;
};

export type TWeakApartInfo = {
  aptInfo: TWeakAptInfo;
  basicInfo: TWeakBasicInfo;
  buildInfo: TWeakbuildInfo;
  splmnInfo: TWeakSplmnInfo;
};
