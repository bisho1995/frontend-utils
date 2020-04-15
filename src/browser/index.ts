// todo: add jsdoc for functions

// todo: need more customization here, check options
export const arrayBufferToBlob = function arrayBufferToBlob(buffer: any, type: any) {
  return new Blob(buffer, { type })
}

export const blobToArrayBuffer = function blobToArrayBuffer(blob: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.addEventListener('loadend', () => resolve(reader.result))
    reader.addEventListener('error', reject)
    reader.readAsArrayBuffer(blob)
  })
}

/**
 * Set the URL of the back button
 * When the user hits the back button the user will be
 * taken to the url specified here
 *
 * todo: test in other browsers
 * @param {String} url the URL of the previous site you want to visit
 */
export const setPreviousURL = function (url: string) {
  window.history.pushState(null, document.title, window.location.href)
  window.addEventListener('popstate', function popStateHandler() {
    window.location.replace(url)
  })
}

/**
 * If the ref already has an animation and you
 * want to reset the animation then pass the ref
 * to this function
 * @param {HTMLDivElement} ref
 */
export const resetAnimation = function (ref: HTMLDivElement | null) {
  if (!ref) return

  ref.style.animation = 'none'
  setTimeout(() => {
    ref.style.animation = ''
  })
}
