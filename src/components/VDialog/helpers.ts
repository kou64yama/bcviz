export interface OverflowSwitcher {
  init(): void;
  switch(value: boolean): void;
}

export const makeOverflowSwitcher = (): OverflowSwitcher => {
  let stored = '';

  return {
    init: () => {
      stored = document.body.style.overflow;
    },
    switch: (value) => {
      if (value) {
        stored = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = stored;
      }
    },
  };
};
