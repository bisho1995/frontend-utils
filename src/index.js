// todo: add jsdoc for functions

// todo: need more customization here, check options
export const arrayBufferToBlob = function arrayBufferToBlob(buffer, type) {
  return new Blob(buffer, { type });
};

export const blobToArrayBuffer = function blobToArrayBuffer(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.addEventListener("loadend", () => resolve(reader.result));
    reader.addEventListener('error', reject)
    reader.readAsArrayBuffer(blob)
  });
};
