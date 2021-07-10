const vue = jest.requireActual<typeof import('vue')>('vue');

module.exports = {
  ...vue,
  onMounted: jest.fn(),
  inject: jest.fn(),
};
