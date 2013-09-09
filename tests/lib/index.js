/*
 * Copyright (c) 2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */


/*jslint nomen:true, node:true */
/*globals describe,it */
"use strict";


var expect = require('chai').expect,
    index = require('../../lib/index.js');

describe('locator-handlebars', function () {

    describe('index', function () {

        it('extend', function () {
            var a = {
                foo: 'bar',
                extensions: 'baz',
                nameParser: 'test'
            },
            extended = index.yui(a);
            expect(extended.describe.summary).to.equal('Compile handlebars templates to yui modules');
            expect(extended.describe.extensions).to.equal('baz');
            expect(extended.describe.nameParser).to.equal('test');
            expect(extended.describe.foo).to.equal('bar');
        });

        it('extend default instance', function () {
            var extended = index.yui();
            expect(extended.describe.summary).to.equal('Compile handlebars templates to yui modules');
        });

        it('YUI/handlebars applied to index.yui().handlebars by default', function () {
            var extended = index.yui(),

                expected = '1.0.0-yui',
                actual = extended.describe.handlebars.VERSION;

            expect(actual.slice(-4)).to.equal(expected.slice(-4));
        });

        it('custom handlebars is used in extended instance', function () {
            var fakeHb = {VERSION:'ohhai'},
                extended = index.yui({handlebars: fakeHb}),

                expected = 'ohhai',
                actual = extended.describe.handlebars.VERSION;

            expect(actual).to.equal(expected);
        });

    });

});
