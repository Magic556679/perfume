export default function toDate(time) {
  const localDate = new Date(time * 1000);
  // toLocaleDateString 當時時區的日期
  return localDate.toLocaleDateString();
}
