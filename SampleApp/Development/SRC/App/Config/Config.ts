
/// <reference path="../../../typings/custom.system.d.ts" />
System.config({
  paths: {'*': '*.js?v=<%= VERSION %>'}
});

// Ugly workaround of systemjs issue https://github.com/systemjs/systemjs/issues/487
(function () {
  var c = System.defined['angular2/core'];
  var i = c.deps.indexOf('angular2/src/core/compiler/interfaces');
  if (i >= 0) {
    c.deps[i] = 'angular2/src/core/zone/ng_zone';
  }
}());

System.import('./Modules/Shell/Views/Shell')
  .catch(e => console.error(e,
    'Report this error at https://github.com/xnramx/Angular2-Seed-MVVM/issues'));
    
