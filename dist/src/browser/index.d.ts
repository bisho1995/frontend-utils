export declare const arrayBufferToBlob: (buffer: any, type: any) => Blob;
export declare const blobToArrayBuffer: (blob: any) => Promise<unknown>;
/**
 * Set the URL of the back button
 * When the user hits the back button the user will be
 * taken to the url specified here
 *
 * todo: test in other browsers
 * @param {String} url the URL of the previous site you want to visit
 */
export declare const setPreviousURL: (url: string) => void;
/**
 * If the ref already has an animation and you
 * want to reset the animation then pass the ref
 * to this function
 * @param {HTMLDivElement} ref
 */
export declare const resetAnimation: (ref: HTMLDivElement | null) => void;
