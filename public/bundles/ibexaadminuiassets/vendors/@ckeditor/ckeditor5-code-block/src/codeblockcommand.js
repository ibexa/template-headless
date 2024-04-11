/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { Command } from 'ckeditor5/src/core';
import { first } from 'ckeditor5/src/utils';
import { getNormalizedAndLocalizedLanguageDefinitions, canBeCodeBlock } from './utils';
/**
 * The code block command plugin.
 */
export default class CodeBlockCommand extends Command {
    /**
     * @inheritDoc
     */
    constructor(editor) {
        super(editor);
        this._lastLanguage = null;
    }
    /**
     * @inheritDoc
     */
    refresh() {
        this.value = this._getValue();
        this.isEnabled = this._checkEnabled();
    }
    /**
     * Executes the command. When the command {@link #value is on}, all topmost code blocks within
     * the selection will be removed. If it is off, all selected blocks will be flattened and
     * wrapped by a code block.
     *
     * @fires execute
     * @param options Command options.
     * @param options.language The code block language.
     * @param options.forceValue If set, it will force the command behavior. If `true`, the command will apply a code block,
     * otherwise the command will remove the code block. If not set, the command will act basing on its current value.
     * @param options.usePreviousLanguageChoice If set on `true` and the `options.language` is not specified, the command
     * will apply the previous language (if the command was already executed) when inserting the `codeBlock` element.
     */
    execute(options = {}) {
        const editor = this.editor;
        const model = editor.model;
        const selection = model.document.selection;
        const normalizedLanguagesDefs = getNormalizedAndLocalizedLanguageDefinitions(editor);
        const firstLanguageInConfig = normalizedLanguagesDefs[0];
        const blocks = Array.from(selection.getSelectedBlocks());
        const value = options.forceValue == undefined ? !this.value : options.forceValue;
        const language = getLanguage(options, this._lastLanguage, firstLanguageInConfig.language);
        model.change(writer => {
            if (value) {
                this._applyCodeBlock(writer, blocks, language);
            }
            else {
                this._removeCodeBlock(writer, blocks);
            }
        });
    }
    /**
     * Checks the command's {@link #value}.
     *
     * @returns The current value.
     */
    _getValue() {
        const selection = this.editor.model.document.selection;
        const firstBlock = first(selection.getSelectedBlocks());
        const isCodeBlock = !!(firstBlock && firstBlock.is('element', 'codeBlock'));
        return isCodeBlock ? firstBlock.getAttribute('language') : false;
    }
    /**
     * Checks whether the command can be enabled in the current context.
     *
     * @returns Whether the command should be enabled.
     */
    _checkEnabled() {
        if (this.value) {
            return true;
        }
        const selection = this.editor.model.document.selection;
        const schema = this.editor.model.schema;
        const firstBlock = first(selection.getSelectedBlocks());
        if (!firstBlock) {
            return false;
        }
        return canBeCodeBlock(schema, firstBlock);
    }
    _applyCodeBlock(writer, blocks, language) {
        this._lastLanguage = language;
        const schema = this.editor.model.schema;
        const allowedBlocks = blocks.filter(block => canBeCodeBlock(schema, block));
        for (const block of allowedBlocks) {
            writer.rename(block, 'codeBlock');
            writer.setAttribute('language', language, block);
            schema.removeDisallowedAttributes([block], writer);
            // Remove children of the  `codeBlock` element that are not allowed. See #9567.
            Array.from(block.getChildren())
                .filter(child => !schema.checkChild(block, child))
                .forEach(child => writer.remove(child));
        }
        allowedBlocks.reverse().forEach((currentBlock, i) => {
            const nextBlock = allowedBlocks[i + 1];
            if (currentBlock.previousSibling === nextBlock) {
                writer.appendElement('softBreak', nextBlock);
                writer.merge(writer.createPositionBefore(currentBlock));
            }
        });
    }
    _removeCodeBlock(writer, blocks) {
        const codeBlocks = blocks.filter(block => block.is('element', 'codeBlock'));
        for (const block of codeBlocks) {
            const range = writer.createRangeOn(block);
            for (const item of Array.from(range.getItems()).reverse()) {
                if (item.is('element', 'softBreak') && item.parent.is('element', 'codeBlock')) {
                    const { position } = writer.split(writer.createPositionBefore(item));
                    const elementAfter = position.nodeAfter;
                    writer.rename(elementAfter, 'paragraph');
                    writer.removeAttribute('language', elementAfter);
                    writer.remove(item);
                }
            }
            writer.rename(block, 'paragraph');
            writer.removeAttribute('language', block);
        }
    }
}
/**
 * Picks the language for the new code block. If any language is passed as an option,
 * it will be returned. Else, if option usePreviousLanguageChoice is true and some
 * code block was already created (lastLanguage is not null) then previously used
 * language will be returned. If not, it will return default language.
 */
function getLanguage(options, lastLanguage, defaultLanguage) {
    if (options.language) {
        return options.language;
    }
    if (options.usePreviousLanguageChoice && lastLanguage) {
        return lastLanguage;
    }
    return defaultLanguage;
}
