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
const {InvalidTypeError} = require('@9fv.io/invalidtype-error')
const {Importer} = require('../lib/importer')
const {PluginNotFoundError} = require('../lib/import-error')

describe('Class {Importer}', () => {
  it('should be a function', () => {
    (Importer).should.be.a.Function()
  })
})

describe('Create a instance of {Importer} ', () => {
  it('without argument should throw an {UndefinedError}', () => {
    (() => {
      Importer.factory()
    }).should.throw(UndefinedError)
  })

  it('with arguments ({object}) should be an instance of {Importer}', () => {
    (() => Importer.factory({})).should.throw(InvalidTypeError)
  })

  it('with arguments ({string}) should be an instance of {Importer}', () => {
    (Importer.factory('test')).should.be.an.instanceOf(Importer)
  })

  it('with arguments ({string},{object}) should be an instance of {Importer}', () => {
    (Importer.factory('test', {})).should.be.an.instanceOf(Importer)
  })

  it('with arguments ({string}, {string}) should be an instance of {Importer}', () => {
    (Importer.factory('test', 'test')).should.be.an.instanceOf(Importer)
  })
})

describe('Lookup for plugin path ', () => {
  it('into local application should be equals to "${process.cwd()/node_modules/test"', () => {
    (Importer.factory('test').getPluginPathFromLocal()).should.be.equal(path.join(process.cwd(), 'test'))
  })

  it('into "node_modules/" should be equals to "${process.cwd()/node_modules/test"', () => {
    (Importer.factory('test').getPluginPathFromNodeModule()).should.be.equal(path.join(process.cwd(), 'node_modules', 'test'))
  })
})

describe('Try to found ', () => {
  it('an existing plugin path into "node_modules/" should return the absolute path of plugin', () => {
    (Importer.factory('@9fv.io/undefined-error').doesPluginPathExists()).should.be.equal(path.join(process.cwd(), 'node_modules', '@9fv.io', 'undefined-error'))
  })

  it('an unexisting plugin path into "node_modules/" should throw a {PluginNotFoundError}', () => {
    (() => {
      Importer.factory('@9fv.io/heurk').doesPluginPathExists()
    }).should.throw(PluginNotFoundError)
  })

  it('an existing plugin path (using extension) into local should return the absolute path of plugin', () => {
    (Importer.factory('lib/import-error.js').doesPluginPathExists()).should.be.equal(path.join(process.cwd(), 'lib/import-error.js'))
  })

  it('an existing plugin path (without extension) into local should return the absolute path of plugin', () => {
    (Importer.factory('lib/import-error').doesPluginPathExists()).should.be.equal(path.join(process.cwd(), 'lib/import-error.js'))
  })

  /**
   it('an existing plugin path (using directory index.js) into local should return the absolute path of plugin', () => {
    (new Importer({name: 'lib'}).doesPluginPathExists()).should.be.equal(path.join(process.cwd(), 'lib/index.js'))
  })
   */

  it('an unexisting plugin path into local path should throw a {PluginNotFoundError}', () => {
    (() => {
      Importer.factory('./meurk').doesPluginPathExists()
    }).should.throw(PluginNotFoundError)
  })
})
