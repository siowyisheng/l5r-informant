export function hyp(x: number, n: number, m: number, nn: number): number {
  const nz = m < n ? m : n
  const mz = m < n ? n : m
  let h = 1,
    s = 1,
    k = 0,
    i = 0
  while (i < x) {
    while (s > 1 && k < nz) {
      h = h * (1 - mz / (nn - k))
      s = s * (1 - mz / (nn - k))
      k = k + 1
    }
    h = (h * (nz - i) * (mz - i)) / (i + 1) / (nn - nz - mz + i + 1)
    s = s + h
    i = i + 1
  }
  while (k < nz) {
    s = s * (1 - mz / (nn - k))
    k = k + 1
  }
  return s
}

export function compute(
  population: number, // big population
  successes: number, // success outcomes
  sample: number, // sample drawn
  n_successes: number // number
): number {
  const p = population // nn
  const s = successes // m
  const n = sample // n
  const x = n_successes // x
  let Prob
  if (n <= 0 || s <= 0 || p <= 0) {
    Prob = 1
  } else if (s > p || n > p) {
    Prob = 0
  } else if (x < 0 || x < n + s - p) {
    Prob = 0
  } else if (x >= n || x >= s) {
    Prob = 1
  } else {
    if (2 * s > p) {
      if (2 * n > p) {
        Prob = hyp(p - s - n + x, p - n, p - s, p)
      } else {
        Prob = 1 - hyp(n - x - 1, n, p - s, p)
      }
    } else if (2 * n > p) {
      Prob = 1 - hyp(s - x - 1, s, p - n, p)
    } else {
      Prob = hyp(x, n, s, p)
    }
  }
  return 1 - Math.round(Prob * 100000) / 100000
}
