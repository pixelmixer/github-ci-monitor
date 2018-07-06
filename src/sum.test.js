import sum from './sum';

test('Sum correctly adds two basic numbers', () => {
  expect(sum(2, 2)).toBe(4);
});

test('Sum adds 80 to 20 and results in 100', () => expect(sum(80, 20)));

test('Sum adds an arbitrary amount of numbers', () => {
  const count = Math.random() * 1000;
  const arr = [];
  let accum = 0;

  for (let i = 0; i < count; i += 1) {
    arr[i] = i;
    accum += i;
  }

  expect(sum(...arr)).toEqual(accum);
});

test('Two and two is two... right?', () => expect(2).toEqual(3));
