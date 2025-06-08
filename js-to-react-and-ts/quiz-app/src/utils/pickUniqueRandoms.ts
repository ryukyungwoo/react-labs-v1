export default function pickUniqueRandoms(count: number): number[] {
  const s = new Set<number>();
  while (s.size < count) {
    // 1부터 10 사이 랜덤 정수
    s.add(Math.floor(Math.random() * 10) + 1);
  }
  return Array.from(s);
}
