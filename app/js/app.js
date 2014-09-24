'use strict';
//comment for changes
require('angular/angular');
require('angular-route');

var tutorialApp = angular.module('tutorialApp', ['ngRoute']);

//controlers
require('./controllers/admin-controller')(tutorialApp);
require('./controllers/tutorial-controller')(tutorialApp);
require('./controllers/tutorial-select-controller')(tutorialApp);

//filters
require('./filters/sentence-filter')(tutorialApp);

//services
require('./services/tutorial-server')(tutorialApp);
require('./services/user-input-service')(tutorialApp);

//directives
//routes
require('./routes/tutorial-routes')(tutorialApp);
