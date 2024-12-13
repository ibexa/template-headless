/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/abortabledebounce
 */
/**
 * Returns a function wrapper that will execute the provided function and abort any previous call that is still in progress.
 *
 * @param func The function to be called. It will be provided with `AbortSignal` as the first parameter.
 */
export default function abortableDebounce<Args extends Array<any>, Ret>(func: (signal: AbortSignal, ...args: Args) => Ret): AbortableFunc<Args, Ret>;
export interface AbortableFunc<Args extends Array<any>, Ret> {
    (...args: Args): Ret;
    abort(): void;
}