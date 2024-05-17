export function ipToCIDR(ip: string, mask: string): string {
  const [a, b, c, d] = mask.split('.').map(Number);
  const _mask = (a << 24) | (b << 16) | (c << 8) | d;
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((_mask & (1 << i)) !== 0) {
      count++;
    }
  }
  return `${ip}/${count}`;
}
