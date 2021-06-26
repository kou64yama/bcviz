import { makeOverflowSwitcher } from './helpers';

describe('OwitchOverflow', () => {
  test('true makes overflow "hidden"', () => {
    const switcher = makeOverflowSwitcher();
    switcher.switch(true);

    expect(document.body.style.overflow).toBe('hidden');
  });

  test('false restore overflow', () => {
    document.body.style.overflow = 'auto';
    const switcher = makeOverflowSwitcher();
    switcher.init();
    switcher.switch(true);
    switcher.switch(false);

    expect(document.body.style.overflow).toBe('auto');
  });
});
