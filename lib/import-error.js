/**
 * This file is part of pigalle.core.importer
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module import-error
 * @description Errors raised if the {Importer} is unable to import the requested plugin.
 * @example
 *
 * throw new ImportError() // ... throw an {ImportError}
 *
 * throw ImportError.factory() // ... another way to throw an {ImportError}
 */

const {ErrorBase} = require('@pigalle/core.base.error')

/**
 * Exception to throw when an error occurs during plugin import.
 *
 * @class
 * @exception
 * @public
 */
class ImportError extends ErrorBase {

}

/**
 * The plugin directory cannot be founded.
 *
 * @class
 * @exception
 * @public
 */
class PluginNotFoundError extends ImportError {

}

/**
 * The requested module is not a valid Pigalle plugin.
 *
 * @class
 * @exception
 * @public
 */
class NotValidPluginError extends ImportError {

}

module.exports = {}
module.exports.ImportError = ImportError
module.exports.PluginNotFoundError = PluginNotFoundError
module.exports.NotValidPluginError = NotValidPluginError
