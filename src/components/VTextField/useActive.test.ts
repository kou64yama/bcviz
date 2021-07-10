import { useActive } from './useActive';

test('assigns active to false', () => {
  const { active } = useActive();
  expect(active.value).toBe(false);
});

test('setActive assigns active', () => {
  const { active, setActive } = useActive();
  setActive(true);
  expect(active.value).toBe(true);
});
