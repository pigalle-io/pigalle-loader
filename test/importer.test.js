/**
 * This file is part of pigalle.core.importer
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const path = require('path')
const process = require('process')

const {UndefinedError} = require('@9fv.io/undefined-error')
const {Importer} = require('../lib/importer')
const {ImportError, PluginNotFoundError} = require('../lib/import-error')

describe('Class {Importer}', () => {
  it('should be a function', () => {
    (Importer).should.be.a.Function()
  })
})

describe('Create a instance of {Importer} without argument using <new> keyword', () => {
  it('should throw an {UndefinedError}', () => {
    (() => { new Importer() }).should.throw(UndefinedError)
  })

  it('should be an instance of {Importer}', () => {
    (new Importer({name: 'test'})).should.be.an.instanceOf(Importer)
  })
})

describe('Create a instance of {Importer} using <new> keyword', () => {
  it('should be an object', () => {
    (new Importer({name: 'test'})).should.be.an.Object()
  })

  it('should be an instance of {Importer}', () => {
    (new Importer({name: 'test'})).should.be.an.instanceOf(Importer)
  })
})

describe('Lookup for plugin path ', () => {
  it('into local application should be equals to "${process.cwd()/node_modules/test"', () => {
    (new Importer({name: 'test'}).getPluginPathFromLocal()).should.be.equal(path.join(process.cwd(), 'test'))
  })

  it('into "node_modules/" should be equals to "${process.cwd()/node_modules/test"', () => {
    (new Importer({name: 'test'}).getPluginPathFromNodeModule()).should.be.equal(path.join(process.cwd(), 'node_modules', 'test'))
  })
})

describe('Try to found ', () => {
  it('an existing plugin path into "node_modules/" should return the absolute path of plugin', () => {
    (new Importer({name: '@9fv.io/undefined-error'}).doesPluginPathExists()).should.be.equal(path.join(process.cwd(), 'node_modules', '@9fv.io', 'undefined-error'))
  })

  it('an unexisting plugin path into "node_modules/" should throw a {PluginNotFoundError}', () => {
    (() => new Importer({name: '@9fv.io/heurk'}).doesPluginPathExists()).should.throw(PluginNotFoundError)
  })

  it('an existing plugin path (using extension) into local should return the absolute path of plugin', () => {
    (new Importer({name: 'lib/import-error.js'}).doesPluginPathExists()).should.be.equal(path.join(process.cwd(), 'lib/import-error.js'))
  })

  it('an existing plugin path (without extension) into local should return the absolute path of plugin', () => {
    (new Importer({name: 'lib/import-error'}).doesPluginPathExists()).should.be.equal(path.join(process.cwd(), 'lib/import-error.js'))
  })

  /**
  it('an existing plugin path (using directory index.js) into local should return the absolute path of plugin', () => {
    (new Importer({name: 'lib'}).doesPluginPathExists()).should.be.equal(path.join(process.cwd(), 'lib/index.js'))
  })
   */

  it('an unexisting plugin path into local path should throw a {PluginNotFoundError}', () => {
    (() => new Importer({name: './meurk'}).doesPluginPathExists()).should.throw(PluginNotFoundError)
  })
})
