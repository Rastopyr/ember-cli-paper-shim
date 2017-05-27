/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-paper-shim',

  included(app) {
    this._super.included.apply(this, arguments);

    let vendor = this.treePaths.vendor;

    app.import({
      development: vendor + '/paper-full.js',
      production: vendor + '/paper-full.min.js',
    }, { prepend: true });

    app.import(vendor + '/shims/paper-full.js');
  },

  treeForVendor(vendorTree) {
    var momentTree = new Funnel(path.join(this.project.root, 'node_modules', 'paper', 'dist'), {
      files: ['paper-full.js']
    });

    return new MergeTrees([vendorTree, momentTree]);
  },
};
