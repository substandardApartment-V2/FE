// 객체 -> 배열 변환 함수
export const transformedArrayHandler = <T extends Record<string, any>>(
  data: T | null | undefined
) => {
  const transformedArray = data
    ? (Object.entries(data).map(([key, value]) => ({
        title: key as keyof T,
        data: value,
      })) as { title: keyof T; data: T[keyof T] }[])
    : [];
  return transformedArray;
};
