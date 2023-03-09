import checkHealth from '../app';

test('check function checkHealth', () => {
  const magician = { name: 'Маг', health: 90 };
  let expected = 'healthy';
  let received = checkHealth(magician);
  expect(received).toBe(expected);

  const dwarf = { name: 'Гном', health: 45 };
  expected = 'wounded';
  received = checkHealth(dwarf);
  expect(received).toBe(expected);

  const elf = { name: 'Эльф', health: 10 };
  expected = 'critical';
  received = checkHealth(elf);
  expect(received).toBe(expected);
});
