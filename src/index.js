var iso8601 = require('iso8601-js-period');
if (typeof window !== 'undefined' && window.L && typeof L !== 'undefined') {
  window.nezasa = { iso8601: iso8601 };
}
require('./leaflet.timedimension');
require('./leaflet.timedimension.util');
require('./leaflet.timedimension.layer');
require('./leaflet.timedimension.layer.wms');
require('./leaflet.timedimension.layer.geojson');
require('./leaflet.timedimension.player');
require('./leaflet.timedimension.control');
