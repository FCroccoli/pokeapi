export const calculatePages = (totalItems: number) => {
  let totalPages = Math.floor(totalItems / 20);
  if (totalPages % 20 > 0) {
    totalPages += 1;
  }
  return totalPages;
};
