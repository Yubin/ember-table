'use strict';

module.exports = {
  name: 'ember-table',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/antiscroll/antiscroll.js');
    app.import(app.bowerDirectory + '/antiscroll/antiscroll.css');
    app.import(app.bowerDirectory + '/jquery-ui/ui/minified/jquery-ui.custom.min.js');
    app.import(app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.js');
  },

  afterInstall: function() {
    this.addBowerPackageToProject('antiscroll');
    this.addBowerPackageToProject('jquery-mousewheel');
    this.addBowerPackageToProject('jquery-ui');
  }
};
