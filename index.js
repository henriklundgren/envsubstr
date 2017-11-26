#!/usr/bin/env node

'use strict';

const stream = require('stream');
const parser = require('./parser');

/**
 * Environment variable replacement from stdin to stdout.
 *
 * @description
 * Small purposeful global npm module without dependencies.
 *
 * ## Production
 *
 * Use in production at your own risk.
 *
 * ## Install
 *
 * ```cli
 * $ npm install -g envsubstr
 * ```
 *
 * @module envsubstr
 * @license MIT
 * @global
 *
 * @example
 *
 * $ echo "${USER}" | envsubstr
 */
process.stdin.setEncoding('utf8');
process.stdin.pipe(new stream.Transform({
  objectMode: true,
  transform(chunk, encoding, done) {
    const value = parser(chunk);
    this.push(value);
    done();
  },
})).pipe(process.stdout);

