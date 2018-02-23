/**
 * This file is part of pigalle.core.importer
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module importer
 * @description Mechanisms to facilitate the import of dependencies and plugins when using the Pigalle framework.
 * @example
 *
 * const {importer} = require('@pigalle/core.importer')
 *
 * // Load an existing Pigalle plugin
 * const tcpTransporter = importer('@pigalle/transporter.tcp')
 *
 * // Load an non-existent plugin
 * const nonExistentPlugin = importer('heurk') // ... throw a {PluginNotFoundError} exception.
 *
 * // Load an existent module, but not a valid Pigalle plugin
 * const notValidPlugin = importer('uuid') // ... throw a {NotValidPluginError} exception.
 *
 */

const fs = require('fs')
const path = require('path')
const process = require('process')
const {UndefinedError} = require('@9fv.io/undefined-error')
const {PigalleBaseClass} = require('@pigalle/core.base.class')

const {PluginNotFoundError, NotValidPluginError} = require('./import-error')

/**
 * The Pigalle type.
 *
 * @type {string}
 */
const PIGALLE_TYPE = 'core'

/**
 * An helper to facilitate the import of dependencies and plugins.
 *
 * @class
 * @public
 */
class Importer extends PigalleBaseClass {
  /**
   * Create a new instance of {Importer}.
   *
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor (...args) {
    super(...args)
    this.name = this.options.name || (() => { throw new UndefinedError() })()
    this.setType(PIGALLE_TYPE)
  }

  static importFromString (name) {

  }

  importFromModules (name) {
    return this.require(this.getPluginPathFromNodeModule())
  }

  require (name) {
    return require(name)
  }

  /**
   * Return the current directory of the current application.
   *
   * @return {string} The current directory of the current application.
   * @public
   */
  static getCurrentDirectory () {
    return process.cwd()
  }

  /**
   * Return the path of `node_modules/` for the current application.
   *
   * @return {string} The path of `node_modules/` for the current application.
   * @public
   */
  static getCurrentNodeModulesDirectory () {
    return path.join(Importer.getCurrentDirectory(), 'node_modules')
  }

  /**
   * Return the possible path of plugin if is installed into the directory of local application.
   *
   * @return {string} The possible installation path of looked up plugin.
   * @public
   */
  getPluginPathFromLocal () {
    return path.join(Importer.getCurrentDirectory(), this.name)
  }

  /**
   * Return the possible path of plugin if is installed into the directory of local application.
   *
   * @return {string} The possible installation path of looked up plugin.
   * @public
   */
  getPluginPathFromLocalJavascriptFile () {
    return this.getPluginPathFromLocal().concat('.js')
  }

  /**
   * Return the possible path of plugin if is installed into the directory of local application.
   *
   * @return {string} The possible installation path of looked up plugin.
   * @public
   */
  getPluginPathFromLocalDirectoryIndex () {
    return path.join(this.getPluginPathFromLocal(), 'index.js')
  }

  /**
   * Return the possible path of plugin if is installed into the `./node_modules` directory.
   *
   * @return {string} The possible installation path of looked up plugin.
   * @public
   */
  getPluginPathFromNodeModule () {
    return path.join(Importer.getCurrentNodeModulesDirectory(), this.name)
  }

  /**
   * Return the possible installation paths of looked up plugin.
   *
   * @return {string[]} Possible installation paths of looked up plugin.
   */
  getPossiblePluginPaths () {
    return [
      this.getPluginPathFromLocal(),
      this.getPluginPathFromLocalJavascriptFile(),
      this.getPluginPathFromLocalDirectoryIndex(),
      this.getPluginPathFromNodeModule()
    ]
  }

  /**
   * Check if the plugin path exists.
   *
   * @return {string} Path of plugin if founded. Throw an error else.
   * @throws {PluginNotFoundError} if plugin cannot be founded.
   */
  doesPluginPathExists () {
    const possiblePluginPaths = this.getPossiblePluginPaths()

    for (let i = 0; i < possiblePluginPaths.length; i += 1) {
      const p = possiblePluginPaths[i]
      if (fs.existsSync(p)) {
        return p
      }
    }
    throw PluginNotFoundError.factory(`Plugin ${this.name} not found.\n\nPlease try: npm install --save ${this.name}`)
  }
}

/**
 * An helper function to import a Pigalle plugin.
 *
 * @param o {string|PluginEntity} The name of plugin to import or a derived class of a Pigalle {PluginEntity}.
 * @return {PluginEntity} A derived class of Pigalle {PluginEntity} if the plugin is founded.
 * @throws {PluginNotFoundError} if plugin cannot be founded.
 */
function importer (name) {
  return Importer.factory({name: name}).import()
}

module.exports = {}
module.exports.Importer = Importer
module.exports.imporer = importer
