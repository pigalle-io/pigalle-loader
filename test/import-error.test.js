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

const {ImportError} = require('../lib/import-error')

class ErrorChild extends ImportError {}

describe('Class {ImportError}', () => {
  it('should be a function', () => {
    (ImportError).should.be.a.Function()
  })
})

describe('Create a instance of {ImportError} using <new> keyword', () => {
  it('should be an object', () => {
    (new ImportError()).should.be.an.Object()
  })

  it('should be an instance of {ImportError}', () => {
    (new ImportError()).should.be.an.instanceOf(ImportError)
  })
})

describe('Create a instance of {ImportError} using <factory> method', () => {
  it('should be an object', () => {
    (ImportError.factory()).should.be.an.Object()
  })

  it('should be an instance of {ImportError}', () => {
    (ImportError.factory()).should.be.an.instanceOf(ImportError)
  })
})

describe('Create a instance of a derived class from {ImportError} using <new> keyword', () => {
  it('should be an object', () => {
    (new ErrorChild()).should.be.an.Object()
  })

  it('should be an instance of {ImportError}', () => {
    (new ErrorChild()).should.be.an.instanceOf(ImportError)
  })
})

describe('Create a instance of a derived class from {ImportError} using <factory> method', () => {
  it('should be an object', () => {
    (ErrorChild.factory()).should.be.an.Object()
  })

  it('should be an instance of {ImportError}', () => {
    (ErrorChild.factory()).should.be.an.instanceOf(ImportError)
  })
})

describe('Throw a instance of a derived class from {ImportError} using <new> method', () => {
  it('should throw ;-)', () => {
    (() => { throw new ErrorChild() }).should.throw(ErrorChild)
  })
})

describe('Throw a instance of a derived class from {ImportError} using <factory> method', () => {
  it('should throw ;-)', () => {
    (() => { throw ErrorChild.factory() }).should.throw(ErrorChild)
  })
})
