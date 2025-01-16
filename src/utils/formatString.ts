export const truncateFileName = (name: string, maxLength: number = 27): string => {
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + "...";
  }
  return name;
};