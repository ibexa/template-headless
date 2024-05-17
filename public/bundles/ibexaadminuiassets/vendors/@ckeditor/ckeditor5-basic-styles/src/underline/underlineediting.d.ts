/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module basic-styles/underline/underlineediting
 */
import { Plugin } from 'ckeditor5/src/core';
/**
 * The underline editing feature.
 *
 * It registers the `'underline'` command, the <kbd>Ctrl+U</kbd> keystroke
 * and introduces the `underline` attribute in the model which renders to the view as an `<u>` element.
 */
export default class UnderlineEditing extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName(): "UnderlineEditing";
    /**
     * @inheritDoc
     */
    init(): void;
}
