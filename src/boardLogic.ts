export function getRowNumber(index: number, size: number) {
  return Math.floor(index / size);
}

export function getColumnNumber(index: number, size: number) {
  return index % size;
}
