/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import MDCFoundation from '../../base/foundation';
import MDCChipSetAdapter from './adapter';
// eslint-disable-next-line no-unused-vars
import {MDCChipInteractionEventType, MDCChipRemovalEventType} from '../chip/foundation';
import {strings, cssClasses} from './constants';

/**
 * @extends {MDCFoundation<!MDCChipSetAdapter>}
 * @final
 */
class MDCChipSetFoundation extends MDCFoundation {
  /** @return enum {string} */
  static get strings() {
    return strings;
  }

  /** @return enum {string} */
  static get cssClasses() {
    return cssClasses;
  }

  /**
   * {@see MDCChipSetAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCChipSetAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCChipSetAdapter} */ ({
      hasClass: () => {},
      removeChip: () => {},
      setSelected: () => {},
    });
  }

  /**
   * @param {!MDCChipSetAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCChipSetFoundation.defaultAdapter, adapter));

    /**
     * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
     * @private {!Array<string>}
     */
    this.selectedChipIds_ = [];
  }

  /**
   * Returns an array of the IDs of all selected chips.
   * @return {!Array<string>}
   */
  getSelectedChipIds() {
    return this.selectedChipIds_;
  }

  /**
   * Toggles selection of the chip with the given id.
   * @param {string} chipId
   */
  toggleSelect(chipId) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      this.deselect(chipId);
    } else {
      this.select(chipId);
    }
  }

  /**
   * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
   * @param {string} chipId
   */
  select(chipId) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      return;
    }

    if (this.adapter_.hasClass(cssClasses.CHOICE) && this.selectedChipIds_.length > 0) {
      this.adapter_.setSelected(this.selectedChipIds_[0], false);
      this.selectedChipIds_.length = 0;
    }
    this.adapter_.setSelected(chipId, true);
    this.selectedChipIds_.push(chipId);
  }

  /**
   * Deselects the chip with the given id.
   * @param {string} chipId
   */
  deselect(chipId) {
    const index = this.selectedChipIds_.indexOf(chipId);
    if (index >= 0) {
      this.selectedChipIds_.splice(index, 1);
      this.adapter_.setSelected(chipId, false);
    }
  }

  /**
   * Handles a chip interaction event
   * @param {!MDCChipInteractionEventType} evt
   */
  handleChipInteraction(evt) {
    const {chipId} = evt.detail;
    if (this.adapter_.hasClass(cssClasses.CHOICE) || this.adapter_.hasClass(cssClasses.FILTER)) {
      this.toggleSelect(chipId);
    }
  }

  /**
   * Handles the event when a chip is removed.
   * @param {!MDCChipRemovalEventType} evt
   */
  handleChipRemoval(evt) {
    const {chipId} = evt.detail;
    this.deselect(chipId);
    this.adapter_.removeChip(chipId);
  }
}

export default MDCChipSetFoundation;
