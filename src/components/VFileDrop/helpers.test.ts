import { onFileList } from './helpers';

describe(onFileList, () => {
  test('invokes callback function with', () => {
    const cb = jest.fn<void, [FileList]>();
    const files = { length: 1 };
    const dataTransfer = { files };
    const event = { dataTransfer };
    onFileList(cb)(event as DragEvent);
    expect(cb).toBeCalledWith(files);
  });

  test('does not invoke callback function', () => {
    const cb = jest.fn<void, [FileList]>();
    const event = {};
    onFileList(cb)(event as DragEvent);
    expect(cb).not.toBeCalled();
  });
});
