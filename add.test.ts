const add = (a: number, b: number): number => a + b;

describe('add', () => {
  test('Commutative Law of Addition', () => {
    expect(add(1, 2)).toBe(add(2, 1));
  });
});
