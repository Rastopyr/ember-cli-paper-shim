(function() {
  function vendorModule() {
    'use strict';

    console.log(paper);

    return {
      'default': paper,
      __esModule: true,
    };
  }

  define('paper-full', [], vendorModule);
})();
