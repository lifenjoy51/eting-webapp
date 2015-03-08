'use strict';

angular.module('etingApp.version', [
  'etingApp.version.interpolate-filter',
  'etingApp.version.version-directive'
])

.value('version', '0.1');
