// load in the test language
var expect = require('chai').expect;

global.document = require('jsdom').jsdom();
global.window = document.defaultView;

// set up some default stuff
global.jQuery = window.jQuery = require('jquery');
global.$ = window.$ = require('jquery');

require('../jquery.vToggle');

/**
 * vShow function tests
 */
describe('vShow', function () {

    var $testEl = $('<div class="test-element">This is a test element</div>');

    // top level view initialization
    describe('Initialize an element', function () {
        it('vShow it', function () {
            $testEl.vShow();
            expect($testEl.hasClass('display-block')).to.be.true;

            expect($testEl.hasClass('display-none')).to.be.false;
            expect($testEl.hasClass('display-inline')).to.be.false;
            expect($testEl.hasClass('display-inline-block')).to.be.false;
        });

        it('vShow inline', function () {
            $testEl.vShow('inline');
            expect($testEl.hasClass('display-inline')).to.be.true;

            expect($testEl.hasClass('display-none')).to.be.false;
            expect($testEl.hasClass('display-block')).to.be.false;
            expect($testEl.hasClass('display-inline-block')).to.be.false;
        });

        it('vShow inline-block', function () {
            $testEl.vShow('inline-block');
            expect($testEl.hasClass('display-inline-block')).to.be.true;

            expect($testEl.hasClass('display-none')).to.be.false;
            expect($testEl.hasClass('display-block')).to.be.false;
            expect($testEl.hasClass('display-inline')).to.be.false;
        });

        it('vHide it', function () {
            $testEl.vHide();
            expect($testEl.hasClass('display-none')).to.be.true;

            expect($testEl.hasClass('display-inline-block')).to.be.false;
            expect($testEl.hasClass('display-block')).to.be.false;
            expect($testEl.hasClass('display-inline')).to.be.false;
        });
    });
});