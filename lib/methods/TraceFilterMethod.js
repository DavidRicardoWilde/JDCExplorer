/**
 * @file TraceFilterMethod.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @author hackyminer <hackyminer@gmail.com>
 * @license LGPL
 * @date 2019/10/18
 */

import isFunction from 'lodash/isFunction';
import { AbstractMethod } from 'web3-core-method';

export default class TraceFilterMethod extends AbstractMethod {
    /**
     * @param {Utils} utils
     * @param {Object} formatters
     * @param {AbstractWeb3Module} moduleInstance
     *
     * @constructor
     */
    constructor(utils, formatters, moduleInstance) {
        super('trace_filter', 1, utils, formatters, moduleInstance);
    }

    /**
     * This method will be executed after the RPC request.
     *
     * @method afterExecution
     *
     * @param {Array} response
     *
     * @returns {Array}
     */
    afterExecution(response) {
        return response;
    }
}
