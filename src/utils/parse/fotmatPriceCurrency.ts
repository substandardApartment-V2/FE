// 아파트 매매가 포맷 함수
export const formatPriceCurrency = (num: number): string => {
  const units = ["만원", "억", "조"];
  let result = "";
  let unitIndex = 0;

  while (num > 0) {
    const part = num % 10000;
    if (part > 0) {
      result = `${part}${units[unitIndex]}${result ? " " + result : ""}`;
    }
    num = Math.floor(num / 10000);
    unitIndex++;
  }

  return result;
};
