export type DragEventHandler = (event: DragEvent) => void;

export const onFileList = (cb: (files: FileList) => void): DragEventHandler => (
  event,
) => {
  if (event.dataTransfer) {
    cb(event.dataTransfer.files);
  }
};
