"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('verge-ember/app', ['exports', 'ember', 'verge-ember/resolver', 'ember-load-initializers', 'verge-ember/config/environment'], function (exports, _ember, _vergeEmberResolver, _emberLoadInitializers, _vergeEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _vergeEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _vergeEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _vergeEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _vergeEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('verge-ember/components/artist-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('verge-ember/components/artist-page-nav', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('verge-ember/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('verge-ember/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('verge-ember/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('verge-ember/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  exports['default'] = _emberBootstrapComponentsBsButtonGroup['default'];
});
define('verge-ember/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('verge-ember/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  exports['default'] = _emberBootstrapComponentsBsButton['default'];
});
define('verge-ember/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('verge-ember/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('verge-ember/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('verge-ember/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('verge-ember/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('verge-ember/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('verge-ember/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('verge-ember/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('verge-ember/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('verge-ember/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('verge-ember/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('verge-ember/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('verge-ember/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('verge-ember/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('verge-ember/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('verge-ember/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('verge-ember/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('verge-ember/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('verge-ember/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('verge-ember/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('verge-ember/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('verge-ember/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('verge-ember/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('verge-ember/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('verge-ember/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('verge-ember/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('verge-ember/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('verge-ember/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('verge-ember/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('verge-ember/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('verge-ember/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('verge-ember/components/footer-nav', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('verge-ember/components/magnific-popup', ['exports', 'ember'], function (exports, _ember) {
		exports['default'] = _ember['default'].Component.extend({

				didInsertElement: function didInsertElement() {
						$(document).ready(function () {
								console.log("Ready!");
								$('.lightbox').magnificPopup({ type: 'image' });
								$('.test-popup-link').magnificPopup({
										type: 'image'
										// other options
								});
						});
				}

		});
});
define('verge-ember/components/navigation-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('verge-ember/components/venue-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('verge-ember/helpers/app-version', ['exports', 'ember', 'verge-ember/config/environment'], function (exports, _ember, _vergeEmberConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _vergeEmberConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('verge-ember/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('verge-ember/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('verge-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('verge-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('verge-ember/helpers/venue-title', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.venueTitle = venueTitle;

  function venueTitle(_ref /*, hash*/) {
    var _ref2 = _slicedToArray(_ref, 3);

    var title = _ref2[0];
    var about = _ref2[1];
    var address = _ref2[2];

    var returnStr = title;
    if (address != null) {
      returnStr += ' address: ' + address;
    }
    if (about != null) {

      returnStr = about;
    }

    return returnStr;
  }

  exports['default'] = _ember['default'].Helper.helper(venueTitle);
});
define('verge-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'verge-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _vergeEmberConfigEnvironment) {
  var _config$APP = _vergeEmberConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('verge-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('verge-ember/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('verge-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('verge-ember/initializers/export-application-global', ['exports', 'ember', 'verge-ember/config/environment'], function (exports, _ember, _vergeEmberConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_vergeEmberConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _vergeEmberConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_vergeEmberConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('verge-ember/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('verge-ember/initializers/load-bootstrap-config', ['exports', 'verge-ember/config/environment', 'ember-bootstrap/config'], function (exports, _vergeEmberConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_vergeEmberConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('verge-ember/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _emberBootstrapInitializersModalsContainer) {
  exports['default'] = _emberBootstrapInitializersModalsContainer['default'];
});
define('verge-ember/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('verge-ember/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("verge-ember/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('verge-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('verge-ember/router', ['exports', 'ember', 'verge-ember/config/environment'], function (exports, _ember, _vergeEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _vergeEmberConfigEnvironment['default'].locationType,
    rootURL: _vergeEmberConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('venues');
    this.route('artists');
    this.route('exhibitions');
    this.route('contacts');

    this.route('page-not-found', {
      path: '/*wildcard'
    });

    this.route('artist', function () {
      this.route('berlin');
      this.route('kruse');
      this.route('lorish');
      this.route('mulder');
      this.route('void');
      this.route('simione');
      this.route('schlunegger');
      this.route('risse');
      this.route('reeves');
      this.route('reed');
      this.route('nelson');
      this.route('morin');
      this.route('miyamoto');
      this.route('mcgovern');
    });
  });

  exports['default'] = Router;
});
define('verge-ember/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/berlin', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/kruse', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/lorish', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/mcgovern', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/miyamoto', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/morin', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/mulder', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/nelson', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/reed', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/reeves', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/risse', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/schlunegger', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/simione', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artist/void', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/artists', ['exports', 'ember'], function (exports, _ember) {

  var artistList = [{
    id: 1,
    image: 'assets/images/berlin220sq.jpg',
    title: 'Jason Berlin',
    page: 'artist.berlin',
    link: 'http://jasonberlinthomas.com',
    about: 'My art practice includes the medium of oil painting, sculpture, installation, college, and curation. I privilege play through improvisational fabrication and utilizes camp as a way to speak to queer sexuality.'
  }, {
    id: 2,
    image: 'assets/images/risse220sq.jpg',
    title: 'Alanna Risse',
    page: 'artist.risse',
    link: 'http://alannarisse.com',
    about: 'Let art be an experience. Free it from its frame, it’s pedestal. Shatter the glass that seals it off from the world. Let it absorb finger grease, get dropped, dinged, damaged. Give it life, let it into our lives. Put it in unexpected places. Share it, don’t squander it. Art doesn’t need anyone’s protection. Set it free.'
  }, {
    id: 3,
    image: 'assets/images/reeves220sq.jpg',
    title: 'Veronica Reeves',
    page: 'artist.reeves',
    link: 'http://www.v2r2please.com/',
    about: 'I look for descriptions and visuals that collapse the conceived separation between self and environment and expand the perception of being an Earth bound body. Accompanying this interest includes the challenge of sharing the Earth’s vulnerability through the lens of personal narrative. Paint and process become my metaphors for emotional, bodily, and Earthly processes in which I layer indications of landscapes, structures, and figures.'
  }, {
    id: 4,
    image: 'assets/images/simione220sq.jpg',
    title: 'Angela Simione',
    page: 'artist.simione',
    link: 'http://angelasimione.weebly.com/',
    about: 'Within the trauma of the redacted document, a new context presents itself… a context in which loss, experienced by the Other, may be felt and understood. Using methods of erasure to create my own "redacted" documents, I make metaphors for the experiences of loss. I present fragments, tiny bits of evidence, allusions to a lost history. It is a poetry born of violence, and it is this violence with which my practice is concerned. What remains, in spite of secrecy, is a new document. A new identity has been constructed. A site of new hope emerges where understanding may be possible.'
  }, {
    id: 5,
    image: 'assets/images/barce220sq.jpg',
    title: 'Epochal Void',
    page: 'artist.void',
    link: 'http://epochalvoid.com/',
    about: 'Specializing in conceptual drawing, printmaking, mixed media art, paper sculpture, lettering and collage, EV creates bodies of work which explore concepts of impermanence, betweenness, as well as social & spiritual bondage. The process is, itself, a gesture of freedom, of liberation from the constraint of measurement, of definition, of expectation.'
  }, {
    id: 6,
    image: 'assets/images/nelson220sq.jpg',
    title: 'Kara Nelson',
    page: 'artist.nelson',
    link: 'http://www.karanelson.com/',
    about: 'Kara Nelson is an artist living and working in the Oakland, CA. She uses her own trash to collage images of landscapes and make small-scale, abstract, and sometimes functional sculptures. '
  }, {
    id: 7,
    image: 'assets/images/morin220sq.jpg',
    title: 'Bertrand Morin',
    page: 'artist.morin',
    link: 'http://bertrandmorin.net/',
    about: 'I use written and photographic observations as the foundation for the creation of fictional characters, alternate worlds, and illogical anthropologies. The various levels of obfuscation and revelation that the text and images provide for viewers is intended to place my work in a limbo between truth and fiction, and to bend the line between historical archive and pseudoscientific farce.'
  }, {
    id: 8,
    image: 'assets/images/kruse220sq.jpg',
    title: 'Brandi Kruse',
    page: 'artist.kruse',
    link: 'http://www.brandikruse.com/',
    about: 'Many of these pieces are part of an ongoing body of work in which excerpts from her photographs are presented as framing devices. This process allows her to elevate the overlooked and question relationships. There is tension to be explored between presence and erasure, past and potential, the tangible and the imagination, the written and the reader.'
  }, {
    id: 9,
    image: 'assets/images/schlunegger220sq.jpg',
    title: 'Danielle Schlunegger-Warner',
    page: 'artist.schlunegger',
    link: 'http://www.schlunegger.com/',
    about: 'Danielle Schlunegger-Warner grew up amongst the shell shops and sand dunes of Ventura, CA. Her artwork is strongly influenced by 18th century Cabinets of Curiosity and early explorers.'
  }, {
    id: 10,
    image: 'assets/images/reed220sq.jpg',
    title: 'Ehren Reed',
    page: 'artist.reed',
    link: 'http://www.ehrenreed.com/',
    about: 'Using found photographs re-processed through digital manipulation and her signature stitching technique, Ehren Reed’s work examines the value we place on memory in the current digital environment. Her most recent work employs photographs pulled from yearbooks and photo albums discovered at thrift stores— once keepsakes to treasure, now cast aside and forgotten.'
  }, {
    id: 11,
    image: 'assets/images/lorish220sq.jpg',
    title: 'A•C•M Lorish',
    page: 'artist.lorish',
    link: 'http://www.acmlorish.com/',
    about: 'A•C•M• Lorish was born in Eugene, Oregon. He studied at School of the Art Institute of Chicago, and Pacific Northwest College of Art where in 2013 he received his MFA in Visual Studies. Selected exhibitions include False Front in Portland, Rockerill in Charleroi Belgium, and dOCUMENTA (13) in Kassel, Germany. He is a founding member of the art collective Danger Punch. He lives and works in Portland Oregon.'
  }, {
    id: 12,
    image: 'assets/images/mcgovern220sq.jpg',
    title: 'Kelly McGovern',
    page: 'artist.mcgovern',
    link: 'http://www.acmlorish.com/',
    about: 'Kelly McGovern is a multimedia artist. Her work explores motion and language in hopes of finding comfort in escape. She has shown nationally in several major cities including New York, Philadelphia, Washington DC, Salt Lake City, and Portland Oregon, as well as internationally in Hereford, UK. She received her BFA from Moore College of Art and Design in Philadelphia, Pennsylvania and received her MFA from the Hallie Ford School of Graduate Studies at Pacific Northwest College of Art in Portland, Oregon.'
  }, {
    id: 13,
    image: 'assets/images/miyamoto220sq.jpg',
    title: 'Kanani Miyamoto',
    page: 'artist.miyamoto',
    link: 'http://c-k-miyamoto.tumblr.com/',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
  }, {
    id: 14,
    image: 'assets/images/mulder220sq.jpg',
    title: 'Rachel Mulder',
    page: 'artist.mulder',
    link: 'https://rachelmulderart.blogspot.com/',
    about: 'Rachel Mulder earned her BFA in Printmaking from the Milwaukee Institute of Art & Design and has since adapted those printmaking techniques and processes into other art forms, namely drawing.'
  }];

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return artistList;
    }
  });
});
define('verge-ember/routes/contacts', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/exhibitions', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/page-not-found', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('verge-ember/routes/venues', ['exports', 'ember'], function (exports, _ember) {

  var venueList = [{
    id: 1,
    title: 'Flickerbox',
    link: 'http://flickerbox.com',
    image: 'assets/images/flickerbox348x220.jpg',
    address: 'contact me for viewing appointments',
    about: 'The Portland office of Flickerbox Inc., is the home base of Verge and where we got our start. It is located in downtown Portland. We hold monthly receptions for showing artists and are always available for viewing appointments. Please note, because this is a private office, there are no drop ins.'
  }, {
    id: 2,
    title: 'The Red Fox',
    link: 'http://redfoxpdx.com',
    image: 'assets/images/redfox348x220.jpg',
    address: '5128 N. Albina, Portland OR 97217',
    about: 'This cozy, North Portland Bar has monthly rotating shows of local Portland emerging artists. Each month we host an artist reception. The bar is open 7 days a week, 3pm – 1:30am. They have great food too!'
  }];

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return venueList;
    }
  });
});
define('verge-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("verge-ember/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "m+96Xvma", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"About Verge\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"about\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6 col-md-6\"],[\"flush-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Verge is a Portland-based art curation and collaboration service. Let us curate your professional space with monthly or quarterly rotations of professional works from Oregon-based emerging artists.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6 col-md-6\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We are always on the lookout for more spaces and artists. Contact \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:alanna@vergepdx.com\"],[\"flush-element\"],[\"text\",\"Alanna\"],[\"close-element\"],[\"text\",\" if you are a Portland area business looking for rotating art exhibits or if you are an artist interested in participating.\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"about-social\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-4 col-md-4\"],[\"flush-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"instagram.com/vergepdx.com\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-instagram\"],[\"static-attr\",\"style\",\"font-size:48px\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"instagram.com/vergepdx.com\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Instagram: @vergepdx\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-4 col-md-4\"],[\"flush-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://facebook.com/vergepdx\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-facebook\"],[\"static-attr\",\"style\",\"font-size:48px\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://facebook.com/vergepdx\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Facebook: VergePDX\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-4 col-md-4\"],[\"flush-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://twitter.com/vergepdx\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-twitter\"],[\"static-attr\",\"style\",\"font-size:48px\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://twitter.com/vergepdx\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Twitter: @vergepdx\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/about.hbs" } });
});
define("verge-ember/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IzWLCL0d", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"navigation-list\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"header\",[]],[\"flush-element\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,1],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"append\",[\"unknown\",[\"footer-nav\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Verge PDX\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/verge_logo80.png\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/application.hbs" } });
});
define("verge-ember/templates/artist/berlin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2wrnILtT", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Jason Berlin\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,1],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tMarch 2017\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tAugust, 2016\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/berlin/zags1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Biograhy\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Jason Berlin received his BFA from Oregon Collage of Art and Craft and his MFA in Visual Studies at Hallie Ford School of Graduate Studies at Pacific Northwest College of Art. (Portland OR ) Berlin works  in the medium of oil painting, sculpture, installation, college, and curation. In 2016 Berlin started Stall Gallery as a curatorial project and in 2016 was awarded six month artist in residency at Rainmaker artist residency in Portland, Oregon. Berlin’s work has been exhibited in numerous art shows in the Pacific Northwest, and in group exhibitions in New York, France, and Vancouver BC. Berlin splits his time between the rural country side of Longview Washington ( his home town ) and urban life where he lives in Portland Oregon.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://jasonberlinthomas.com\"],[\"flush-element\"],[\"text\",\"Jason Berlin\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Red Fox\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/berlin.hbs" } });
});
define("verge-ember/templates/artist/kruse", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AANjMMuk", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Brandi Kruse\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tNovember 2016\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"comment\",\" magnific popup \"],[\"text\",\"\\n\\n\\t\"],[\"comment\",\" magnific popup \"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"magnific-popup\"]],false],[\"text\",\"\\n\\n\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Brandi Kruse grew up in Ypsilanti, Michigan and received her BS in Education at Central Michigan University where she studied literature and photography. She moved to Portland, OR in 2008. After teaching high school language arts and studio arts for eight years, she recently graduated with an MFA in Print Media from Pacific Northwest College of Art. In no particular order, she thinks of herself as a teacher, photographer, printmaker, and poet. Her work is dependent on time, light, and reflection and she often questions what is gained and what is lost in this reliance.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Most of the work Kruse has on display are her photogravure etchings. This intaglio technique maintains fine details, an unparalleled tonal range and contrast, and is perfect for her rich imagery of structure, light, and illusion. Using this analogue process, she returns to the darkroom, where she began as a photographer. In making a photogravure plate, she exposes an image onto fragile, light-sensitive gelatin. Immediately after exposing the gelatin, she gently presses it face down onto a copper plate in cold water. In water just right for a baby’s bath, she watches as the latent image is born, the gelatin dissolving into varying hills and valleys, in some places nearly exposing the copper beneath. Later, the layers of gelatin determine the depth of the etch across the surface of the copper. This haptic process holds itself in stark relief to contemporary digital processes in a way that Kruse finds deeply satisfying. She sees slowing down and heightening awareness in small details as a welcome gift.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Many of these pieces are part of an ongoing body of work in which excerpts from her photographs are presented as framing devices. This process allows her to elevate the overlooked and question relationships. There is tension to be explored between presence and erasure, past and potential, the tangible and the imagination, the written and the reader.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/kruse.hbs" } });
});
define("verge-ember/templates/artist/lorish", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "btNhT+0a", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"A•C•M Lorish\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tJanuary 2017\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t321 SW 4th, Suite 501, Portland OR\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/lorish/despair1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Solfatara: Paintings Celebrating Demons and Other Things\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"blockquote\",[]],[\"flush-element\"],[\"text\",\"The demonic life of a lover is like the surface of a solfatara; huge bubbles (muddy and scorching) burst, one after the other; when one falls back and dies out, returning to the mass, another forms and swells further on.\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"-Roland Barthes\"],[\"close-element\"],[\"text\",\"\\n\\n\\t \\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Taken from a short section of Roland Barthes A Lovers Discourse these six paintings celebrate, with glitter puff paint, the demons that hide in the recesses and shadows, always lurking and waiting.  The other paintings are abstracted structures, layered with syncopated marks, meant to create order and calm acting as a way to foil or control the demons. \"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Biography\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"A•C•M• Lorish was born in Eugene, Oregon.  He studied at School of the Art Institute of Chicago, and Pacific Northwest College of Art where in 2013 he received his MFA in Visual Studies.  Selected exhibitions include False Front in Portland, Rockerill in Charleroi Belgium, and dOCUMENTA (13) in Kassel, Germany.  He is a founding member of the art collective Danger Punch.  He lives and works in Portland Oregon.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Websites: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.acmlorish.com\"],[\"flush-element\"],[\"text\",\"acmlorish.com\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.dangerpunch.com\"],[\"flush-element\"],[\"text\",\"Danger Punch Collective\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/lorish.hbs" } });
});
define("verge-ember/templates/artist/mcgovern", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iJbAimuz", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Kelly McGovern\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tJune 2016\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/mcgovern/neverdie1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Statement:\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"blockquote\",[]],[\"flush-element\"],[\"text\",\"\\\"It feels like we're racing parked cars. It feels like we're tied at the finish line and if we are moving at all we can't be moving fast. I am nostalgic for the things I didn't like in the past.\\\"\\n\\n\\t-Matthew Winn\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"No matter where you go you will leave something you love behind. \"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Bio\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Kelly McGovern is a multimedia artist. Her work explores motion and language in hopes of finding comfort in escape. She has shown nationally in several major cities including New York, Philadelphia, Washington DC, Salt Lake City, and Portland Oregon, as well as internationally in Hereford, UK. She received her BFA from Moore College of Art and Design in Philadelphia, Pennsylvania and received her MFA from the Hallie Ford School of Graduate Studies at Pacific Northwest College of Art in Portland, Oregon.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://kelly-mcgovern.com/\"],[\"flush-element\"],[\"text\",\"http://kelly-mcgovern.com\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/mcgovern.hbs" } });
});
define("verge-ember/templates/artist/miyamoto", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Zw+CXO/M", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Kanani Miyamoto\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\tMay 2017\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/miyamoto/lemelsonwall1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/miyamoto.hbs" } });
});
define("verge-ember/templates/artist/morin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "BFl+8mM5", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Bertrand Morin\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"July 2016\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tFlickerbox, Inc.\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tPortland Oregon\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tContact Alanna for Viewing Appointments\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/morin/planetoid10_1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Statement\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"In my work I use a combination of photographic processes and text to transform ordinary objects and places into strange and bizarre pseudoscientific entities. The subjects of the images are separated from their original context by the physical act of collection and removal, or by careful photographic composition. They are then recombined and cataloged with one another to form new relationships, vocabularies, networks of meaning, and narrative links. The transformation of images and objects is intended to undermine the ways that organizational systems, methods of display, and the truth value assigned to facts and histories mask authorship, ideologies, and limit individual perception. The work is narrative and intended to deeply engage viewers' imaginations through its fantastical, humorous, and sometimes disquieting content. Viewers are left to follow subtle clues and connections to form their own unique links between the images and text. Observation is the backbone of my creative process. I use written and photographic observations as the foundation for the creation of fictional characters, alternate worlds, and illogical anthropologies. The various levels of obfuscation and revelation that the text and images provide for viewers is intended to place my work in a limbo between truth and fiction, and to bend the line between historical archive and pseudoscientific farce.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://bertrandmorin.net/\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"BertrandMorin.net\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/morin.hbs" } });
});
define("verge-ember/templates/artist/mulder", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "v1DmyFOR", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Rachel Mulder\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tFebruary 2017\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tOpening Reception: February 16th 7-10pm\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t321 SW 4th, Suite 501, Portland OR\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tPlease note, this is a private office space, no drop-ins.\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tcontact me for viewing appointments\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/mulder/selfportrait1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Artist Bio:\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Rachel Mulder earned her BFA in Printmaking from the Milwaukee Institute of Art & Design and has since adapted those printmaking techniques and processes into other art forms, namely drawing. She has been an art-assistant/direct care worker, helping others make art based on their individual desires as well as in workshop settings, and is currently teaching Experimental Drawing for local nonprofit \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.publicannex.org/\"],[\"flush-element\"],[\"text\",\"Public Annex\"],[\"close-element\"],[\"text\",\". She is a Midwestern native and lives and works in Portland, Oregon.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://rachelmulderart.blogspot.com/\"],[\"flush-element\"],[\"text\",\"rachelmulderart.blogspt.com\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/mulder.hbs" } });
});
define("verge-ember/templates/artist/nelson", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FxTxQmFn", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Kara Nelson\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tDecember 2016\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/nelson/reds1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Biography\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Kara Nelson is an artist living and working in the Oakland, CA. She uses her own trash to collage images of landscapes and make small-scale, abstract, and sometimes functional sculptures. Her work has been shown in group and solo exhibitions in galleries, and exhibitions in private homes.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Originally from the North West, Kara references elements of those landscapes in the images she creates. These signifiers are increasingly mixed with reference to the California landscapes she interacts with daily. For Kara, living sometimes means needing to use objects that can have harmful environmental effects. She creates her work as atonement for using. It serves as a reminder to tread lightly in the world in order to minimize her negative effect on the environment.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Statement\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I believe the world moves in cyclical patterns: birth, death, and decay, which in turn fuels further growth. But the waste which humans produce is disruptive to this cycle. By creating landscapes with discarded materials, I am attempting to give them a longer and more meaningful life. By taking something that inhibits life and using it to create something that represents it, I hope to call attention to the function waste can serve.\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/nelson.hbs" } });
});
define("verge-ember/templates/artist/reed", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Rd8rrsir", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Ehren Reed\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,1],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tDecember 2016\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tJanuary 2017\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/reed/bqueen1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Lost & Found\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Using found photographs re-processed through digital manipulation and her signature stitching technique, Ehren Reed’s work examines the value we place on memory in the current digital environment. Her most recent work employs photographs pulled from yearbooks and photo albums discovered at thrift stores— once keepsakes to treasure, now cast aside and forgotten. The embroidery she employs in her work bears the implicit touch of the human hand as she manipulates these with the effect of bringing a new and distinct physicality to tossed-away images.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"About The Artist\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Ehren Reed relocated to Louisville, KY in late 2013 after 14 years as a professional artist and art educator in San Francisco, CA.  She currently works as Outreach Programs Manager for Louisville Visual Art where she teaches visual art in various schools and community centers throughout the Louisville Metro area. Her work has been exhibited nationally in numerous venues including StudioWorks (KY), Hanover College (IN) Donna Seager Gallery (CA), Geras Tousignant Gallery (CA), SOMArts (CA), Bedford Gallery (CA), the Sebastopol Center for the Arts (CA), Torpedo Factory Art Center (VA) and the Textile Arts Center (NY).  Reed’s work is held in the permanent collection of the University of Kentucky and has been featured in numerous print publications including Contemporary Artists Books by Emily Marks, Dutch fine art magazine Elephant and, most recently, Textile Art Around the World, edited by Ellen Bakker.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Ehren Reed Fine Art\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tLouisville, Kentucky\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.ehrenreed.com\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"www.ehrenreed.com\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Red Fox\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/reed.hbs" } });
});
define("verge-ember/templates/artist/reeves", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "UI87YtJT", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Veronica Reeves\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Bright Spots\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tSeptember 2016\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"text\",\", Portland OR\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/reeves/breathingspace1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Bright Spots\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"An asteroid crash lands on a planet conducive to life. It is carrying proteins, seeds, spores, and data from another world that faced a cataclysmic event. Through layers of masking, spray paint, spills, and hand painting techniques, I visualize places of post-dystopian sanctuary. Pulling from aesthetics of digital games, visionary art, images of outer space, and earth processes, Bright Spots hints at fragments of new life slowly unfolding against the odds. As long as there is RNA, and DNA, it’ll be okay.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Wesbite: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.v2r2please.com/\"],[\"flush-element\"],[\"text\",\"http://www.v2r2please.com/\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc.\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/reeves.hbs" } });
});
define("verge-ember/templates/artist/risse", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Lju0BoB4", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Alanna Risse\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tMay, 2016\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/risse/fifthwheel1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Art Manifesto\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Let art be an experience. Free it from its frame, it’s pedestal. Shatter the glass that seals it off from the world. Let it absorb finger grease, get dropped, dinged, damaged. Give it life, let it into our lives. Put it in unexpected places. Share it, don’t squander it. Art doesn’t need anyone’s protection. Set it free.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://alannarisse.com\"],[\"flush-element\"],[\"text\",\"AlannaRisse.com\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tInstagram: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://www.instagram.com/alannarisse/\"],[\"flush-element\"],[\"text\",\"@alannarisse\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/risse.hbs" } });
});
define("verge-ember/templates/artist/schlunegger", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fi/zL4IZ", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Danielle Schlunegger-Warner\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tFebruary 2017\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tOpening Reception: February 12th 7-10pm\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t5128 N Albina, Portland OR 97217\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/schlunegger/rfinstall1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Statement\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Danielle Schlunegger-Warner grew up amongst the shell shops and sand dunes of Ventura, CA. Her artwork is strongly influenced by 18th century Cabinets of Curiosity and early explorers.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Inspired by natural history and the museums that house it, Danielle creates her own worlds within this established context. Her new work presents a vision of exploration and conquest during the Age of Imperialism in the Americas, searching for the elusive and misguided promise of truly untouched lands from the perspective of naturalists, who are themselves invaders.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Graduating with a BFA from California College of Arts in 2010 with distinction, Danielle received the All College Honors award for her work on The Marcus Kelli Collection and was awarded the 2014 Affiliate Artist Award From the Headlands Center for the Arts in Marin, CA. Danielle currently and lives and works from her home studio in Portland, Oregon and writes remotely for \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.venisonmagazine.com/\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Venison \"],[\"close-element\"],[\"text\",\"Magazine.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://schlunegger.com/\"],[\"flush-element\"],[\"text\",\"http://schlunegger.com/\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"Instagram & Twitter @naturalistandco\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"The Red Fox\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/schlunegger.hbs" } });
});
define("verge-ember/templates/artist/simione", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Q1GLLxA5", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Angela Simione\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,1],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tApril 2017\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tMay 2017\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/simione/bed1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://angelasimione.weebly.com/\"],[\"flush-element\"],[\"text\",\"http://angelasimione.weebly.com\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Red Fox\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/simione.hbs" } });
});
define("verge-ember/templates/artist/void", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1/Dnp/FO", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-page\"],[\"flush-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Epochal Void\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"venues\"],null,0],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tMarch 2017\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/void/dyptic1024.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Statement\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"The Specimen series is a collection of portraits of abstract life forms that sit in their frames like cells, as iconic objects of study.  They are alive, but formless, undefined bundles of energy and movement.  They may be blown-up images of microscopic bodies, like viruses or bacteria, which affect their host environments while remaining formless and invisible to the naked human eye.  They could be visual representations of the creative impulse itself, of the Big Bang, in miniature, of the original origin, floating in space, suspended in time.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"About The Artist\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"The word epochal describes a highly significant and influential moment in time, one capable of ushering in a new age. The void is a space without form. It exists between emptiness and content, a state of pure potential. The name Epochal Void comes from a dream. It is a relationship between time and space that does not identify with a particular gender, race, or socioeconomic class, and thus, may move freely, always in flux, constantly becoming. Epochal Void is a Portland-based visual artist, curator and director of Trust Art Collective, an organization that produces group art exhibitions and other events that engage emerging artists with each other and the surrounding community. Specializing in conceptual drawing, printmaking, mixed media art, paper sculpture, lettering and collage, EV creates bodies of work which explore concepts of impermanence, betweenness, as well as social & spiritual bondage. The process is, itself, a gesture of freedom, of liberation from the constraint of measurement, of definition, of expectation.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"epochalvoid.com\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tFollow @epochalvoid\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\tepochal.press@gmail.com\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"artist-page-nav\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Flickerbox, Inc., PDX\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artist/void.hbs" } });
});
define("verge-ember/templates/artists", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nAMDZC3G", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Artists\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"artist-thumbs\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row auto-clear\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-6 col-sm-4 col-md-3 col-lg-3\"],[\"flush-element\"],[\"text\",\"\\n \\t\\t\\t\"],[\"append\",[\"helper\",[\"artist-list\"],null,[[\"artistList\"],[[\"get\",[\"artistList\"]]]]],false],[\"text\",\"\\n      \\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"artistList\"]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/artists.hbs" } });
});
define("verge-ember/templates/components/artist-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KwCwYBEm", "block": "{\"statements\":[[\"open-element\",\"article\",[]],[\"dynamic-attr\",\"id\",[\"unknown\",[\"artistList\",\"id\"]],null],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"block\",[\"link-to\"],[[\"get\",[\"artistList\",\"page\"]]],null,1],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[[\"get\",[\"artistList\",\"page\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"about\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"artistList\",\"about\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"artistList\",\"link\"]],null],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"artistList\",\"link\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\t\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"artistList\",\"title\"]],false]],\"locals\":[]},{\"statements\":[[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"artistList\",\"image\"]]]]],[\"flush-element\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/artist-list.hbs" } });
});
define("verge-ember/templates/components/artist-page-nav", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Fk3hZV7H", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"artists\"],null,0],[\"text\",\"\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"Return to Artists Page\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/artist-page-nav.hbs" } });
});
define("verge-ember/templates/components/footer-nav", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "H/YydRX6", "block": "{\"statements\":[[\"open-element\",\"footer\",[]],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"left col-sm-6 col-md-6\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"© Copyright Verge PDX 2017\"],[\"close-element\"],[\"text\",\"\\n      \\t\"],[\"close-element\"],[\"text\",\"\\n      \\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6 col-md-6\"],[\"flush-element\"],[\"text\",\"\\n  \\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"This site was designed and developed in \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://emberjs.com/\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Ember.js\"],[\"close-element\"],[\"text\",\" and Bootstrap by:\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://alannarisse.com/webdev\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Alanna Risse\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://www.linkedin.com/in/alanna-risse-portland\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-linkedin\"],[\"static-attr\",\"style\",\"font-size:24px\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://github.com/alannarisse\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-github\"],[\"static-attr\",\"style\",\"font-size:24px\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \\t\"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/footer-nav.hbs" } });
});
define("verge-ember/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "91465gn9", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"showValidationMessages\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"help-block\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"validationMessages\",\"firstObject\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/form-element/errors.hbs" } });
});
define("verge-ember/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vU7IjXNo", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasFeedback\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-control-feedback \",[\"unknown\",[\"iconName\"]]]]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/form-element/feedback-icon.hbs" } });
});
define("verge-ember/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PoFXX4H5", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"checkbox\"],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"value\"]],null],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.checked\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"label\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "verge-ember/templates/components/form-element/horizontal/checkbox.hbs" } });
});
define("verge-ember/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hNK+Ya7T", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,5,2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"input\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"value\"]],null],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"oninput\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"type\",[\"unknown\",[\"controlType\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"placeholder\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"size\",[\"unknown\",[\"size\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"minlength\",[\"unknown\",[\"minlength\"]],null],[\"dynamic-attr\",\"maxlength\",[\"unknown\",[\"maxlength\"]],null],[\"dynamic-attr\",\"min\",[\"unknown\",[\"min\"]],null],[\"dynamic-attr\",\"max\",[\"unknown\",[\"max\"]],null],[\"dynamic-attr\",\"pattern\",[\"unknown\",[\"pattern\"]],null],[\"dynamic-attr\",\"accept\",[\"unknown\",[\"accept\"]],null],[\"dynamic-attr\",\"autocomplete\",[\"unknown\",[\"autocomplete\"]],null],[\"dynamic-attr\",\"autosave\",[\"unknown\",[\"autosave\"]],null],[\"dynamic-attr\",\"inputmode\",[\"unknown\",[\"inputmode\"]],null],[\"dynamic-attr\",\"multiple\",[\"unknown\",[\"multiple\"]],null],[\"dynamic-attr\",\"step\",[\"unknown\",[\"step\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"value\",\"id\",\"validation\"],[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]]]]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0],[\"text\",\"        \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"input\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"value\"]],null],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"oninput\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"type\",[\"unknown\",[\"controlType\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"placeholder\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"size\",[\"unknown\",[\"size\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"minlength\",[\"unknown\",[\"minlength\"]],null],[\"dynamic-attr\",\"maxlength\",[\"unknown\",[\"maxlength\"]],null],[\"dynamic-attr\",\"min\",[\"unknown\",[\"min\"]],null],[\"dynamic-attr\",\"max\",[\"unknown\",[\"max\"]],null],[\"dynamic-attr\",\"pattern\",[\"unknown\",[\"pattern\"]],null],[\"dynamic-attr\",\"accept\",[\"unknown\",[\"accept\"]],null],[\"dynamic-attr\",\"autocomplete\",[\"unknown\",[\"autocomplete\"]],null],[\"dynamic-attr\",\"autosave\",[\"unknown\",[\"autosave\"]],null],[\"dynamic-attr\",\"inputmode\",[\"unknown\",[\"inputmode\"]],null],[\"dynamic-attr\",\"multiple\",[\"unknown\",[\"multiple\"]],null],[\"dynamic-attr\",\"step\",[\"unknown\",[\"step\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"value\",\"id\",\"validation\"],[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]]]]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"unknown\",[\"horizontalLabelGridClass\"]],\" \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,4,3],[\"text\",\"        \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "verge-ember/templates/components/form-element/horizontal/default.hbs" } });
});
define("verge-ember/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "eQYHqFYl", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"textarea\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"oninput\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"cols\",[\"unknown\",[\"cols\"]],null],[\"dynamic-attr\",\"rows\",[\"unknown\",[\"rows\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"placeholder\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"minlength\",[\"unknown\",[\"minlength\"]],null],[\"dynamic-attr\",\"maxlength\",[\"unknown\",[\"maxlength\"]],null],[\"dynamic-attr\",\"autocomplete\",[\"unknown\",[\"autocomplete\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"dynamic-attr\",\"wrap\",[\"unknown\",[\"wrap\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"value\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n    \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"unknown\",[\"horizontalLabelGridClass\"]],\" \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"textarea\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"oninput\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"cols\",[\"unknown\",[\"cols\"]],null],[\"dynamic-attr\",\"rows\",[\"unknown\",[\"rows\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"placeholder\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"minlength\",[\"unknown\",[\"minlength\"]],null],[\"dynamic-attr\",\"maxlength\",[\"unknown\",[\"maxlength\"]],null],[\"dynamic-attr\",\"autocomplete\",[\"unknown\",[\"autocomplete\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"dynamic-attr\",\"wrap\",[\"unknown\",[\"wrap\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"value\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n    \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "verge-ember/templates/components/form-element/horizontal/textarea.hbs" } });
});
define("verge-ember/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Tk9MySgr", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"checkbox\"],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"value\"]],null],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.checked\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"label\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/form-element/inline/checkbox.hbs" } });
});
define("verge-ember/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "01gSAI8k", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,2],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"input\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"value\"]],null],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"oninput\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"type\",[\"unknown\",[\"controlType\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"placeholder\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"size\",[\"unknown\",[\"size\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"minlength\",[\"unknown\",[\"minlength\"]],null],[\"dynamic-attr\",\"maxlength\",[\"unknown\",[\"maxlength\"]],null],[\"dynamic-attr\",\"min\",[\"unknown\",[\"min\"]],null],[\"dynamic-attr\",\"max\",[\"unknown\",[\"max\"]],null],[\"dynamic-attr\",\"pattern\",[\"unknown\",[\"pattern\"]],null],[\"dynamic-attr\",\"accept\",[\"unknown\",[\"accept\"]],null],[\"dynamic-attr\",\"autocomplete\",[\"unknown\",[\"autocomplete\"]],null],[\"dynamic-attr\",\"autosave\",[\"unknown\",[\"autosave\"]],null],[\"dynamic-attr\",\"inputmode\",[\"unknown\",[\"inputmode\"]],null],[\"dynamic-attr\",\"multiple\",[\"unknown\",[\"multiple\"]],null],[\"dynamic-attr\",\"step\",[\"unknown\",[\"step\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"value\",\"id\",\"validation\"],[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]]]]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "verge-ember/templates/components/form-element/inline/default.hbs" } });
});
define("verge-ember/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6QcWshhY", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,0],[\"open-element\",\"textarea\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"oninput\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"cols\",[\"unknown\",[\"cols\"]],null],[\"dynamic-attr\",\"rows\",[\"unknown\",[\"rows\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"placeholder\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"minlength\",[\"unknown\",[\"minlength\"]],null],[\"dynamic-attr\",\"maxlength\",[\"unknown\",[\"maxlength\"]],null],[\"dynamic-attr\",\"autocomplete\",[\"unknown\",[\"autocomplete\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"dynamic-attr\",\"wrap\",[\"unknown\",[\"wrap\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"value\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "verge-ember/templates/components/form-element/inline/textarea.hbs" } });
});
define("verge-ember/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NwWHEdaj", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"checkbox\"],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"value\"]],null],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.checked\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"label\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "verge-ember/templates/components/form-element/vertical/checkbox.hbs" } });
});
define("verge-ember/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "xzFTg8TK", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,2],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"input\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"value\"]],null],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"oninput\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"type\",[\"unknown\",[\"controlType\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"placeholder\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"size\",[\"unknown\",[\"size\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"minlength\",[\"unknown\",[\"minlength\"]],null],[\"dynamic-attr\",\"maxlength\",[\"unknown\",[\"maxlength\"]],null],[\"dynamic-attr\",\"min\",[\"unknown\",[\"min\"]],null],[\"dynamic-attr\",\"max\",[\"unknown\",[\"max\"]],null],[\"dynamic-attr\",\"pattern\",[\"unknown\",[\"pattern\"]],null],[\"dynamic-attr\",\"accept\",[\"unknown\",[\"accept\"]],null],[\"dynamic-attr\",\"autocomplete\",[\"unknown\",[\"autocomplete\"]],null],[\"dynamic-attr\",\"autosave\",[\"unknown\",[\"autosave\"]],null],[\"dynamic-attr\",\"inputmode\",[\"unknown\",[\"inputmode\"]],null],[\"dynamic-attr\",\"multiple\",[\"unknown\",[\"multiple\"]],null],[\"dynamic-attr\",\"step\",[\"unknown\",[\"step\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"value\",\"id\",\"validation\"],[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]]]]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "verge-ember/templates/components/form-element/vertical/default.hbs" } });
});
define("verge-ember/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "oNDG9idO", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,0],[\"open-element\",\"textarea\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"oninput\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],[[\"value\"],[\"target.value\"]]],null],[\"dynamic-attr\",\"id\",[\"unknown\",[\"formElementId\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"cols\",[\"unknown\",[\"cols\"]],null],[\"dynamic-attr\",\"rows\",[\"unknown\",[\"rows\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"placeholder\"]],null],[\"dynamic-attr\",\"autofocus\",[\"unknown\",[\"autofocus\"]],null],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"disabled\"]],null],[\"dynamic-attr\",\"readonly\",[\"helper\",[\"if\"],[[\"get\",[\"readonly\"]],\"readonly\"],null],null],[\"dynamic-attr\",\"required\",[\"unknown\",[\"required\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"minlength\",[\"unknown\",[\"minlength\"]],null],[\"dynamic-attr\",\"maxlength\",[\"unknown\",[\"maxlength\"]],null],[\"dynamic-attr\",\"autocomplete\",[\"unknown\",[\"autocomplete\"]],null],[\"dynamic-attr\",\"form\",[\"unknown\",[\"form\"]],null],[\"dynamic-attr\",\"spellcheck\",[\"unknown\",[\"spellcheck\"]],null],[\"dynamic-attr\",\"wrap\",[\"unknown\",[\"wrap\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"value\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "verge-ember/templates/components/form-element/vertical/textarea.hbs" } });
});
define("verge-ember/templates/components/magnific-popup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "xQ+uRZpY", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"test-popup-link\"],[\"static-attr\",\"href\",\"assets/images/kruse/bikes1024.jpg\"],[\"flush-element\"],[\"text\",\"Open popup\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"assets/images/kruse/bikes1024.jpg\"],[\"static-attr\",\"class\",\"lightbox\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"assets/images/kruse/bikes1024.jpg\"],[\"static-attr\",\"class\",\"\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/magnific-popup.hbs" } });
});
define("verge-ember/templates/components/navigation-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ixMbauNS", "block": "{\"statements\":[[\"block\",[\"bs-navbar\"],null,[[\"type\"],[[\"get\",[\"type\"]]]],13],[\"text\",\"\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"About\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"about\"],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"Contact\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"contacts\"],null,2]],\"locals\":[]},{\"statements\":[[\"text\",\"Venues\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"venues\"],null,4]],\"locals\":[]},{\"statements\":[[\"text\",\"Artists\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"artists\"],null,6]],\"locals\":[]},{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"index\"],null,8]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t    \"],[\"block\",[\"nav\",\"item\"],null,null,9],[\"text\",\"\\n\\t    \"],[\"block\",[\"nav\",\"item\"],null,null,7],[\"text\",\"\\n\\t    \"],[\"block\",[\"nav\",\"item\"],null,null,5],[\"text\",\"\\n\\t    \"],[\"block\",[\"nav\",\"item\"],null,null,3],[\"text\",\"\\n\\t   \\t\"],[\"block\",[\"nav\",\"item\"],null,null,1],[\"text\",\"\\n\\n\"]],\"locals\":[\"nav\"]},{\"statements\":[[\"block\",[\"navbar\",\"nav\"],null,null,10]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"navbar\",\"toggle\"],null,null,12],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"navbar\",\"content\"],null,null,11]],\"locals\":[\"navbar\"]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/navigation-list.hbs" } });
});
define("verge-ember/templates/components/venue-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vB+sW9Yp", "block": "{\"statements\":[[\"open-element\",\"article\",[]],[\"dynamic-attr\",\"id\",[\"unknown\",[\"venueList\",\"id\"]],null],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"venueList\",\"link\"]],null],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"venueList\",\"image\"]]]]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"venueList\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"append\",[\"unknown\",[\"venueList\",\"about\"]],false],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Website: \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"venueList\",\"link\"]],null],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"venueList\",\"link\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\t\\n\\n\\n\\n\"],[\"comment\",\" <article id={{venueList.id}}>\\n\\t<a href={{venueList.link}} target=\\\"_blank\\\">\\n\\t{{venue-title venueList.title venueList.about venueList.address}}\\n\\t</a>\\n</article>\\t\"],[\"text\",\"\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/components/venue-list.hbs" } });
});
define("verge-ember/templates/contacts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "znFDDofP", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Interested a viewing appointment? Contact me via email.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Would you like Portland to rotate art shows in your Portland business? Contact me.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Artists: If you are interested in showing with Verge, please send me a link to your portfolio and a brief email describing how you see your work fitting into the Verge catalog.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/contacts.hbs" } });
});
define("verge-ember/templates/exhibitions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4vUPFko8", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Exhibitions\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/exhibitions.hbs" } });
});
define("verge-ember/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GaoW7RK8", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"featured-artists\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row auto-clear\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12 col-sm-6 col-md-6 col-lg-4\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"artist.mulder\"],null,5],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"marketing-columns\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"artist.mulder\"],null,4],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Rachel Mulder creates images through repetitive mark making. Her show at Flickerbox, Inc., in downtown Portland will be up through the month of February, 2017.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"The opening reception is Thursday, \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"February 16th 7-10pm\"],[\"close-element\"],[\"text\",\". 321 SW 4th Ave, Suite 501, Portland OR. PLEASE NOTE: this is a private office. if you are unable to attend the reception and would like to see the show, please \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:alanna@vergepdx.com\"],[\"flush-element\"],[\"text\",\"email me\"],[\"close-element\"],[\"text\",\".\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12 col-sm-6 col-md-6 col-lg-4\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"artist.schlunegger\"],null,3],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"marketing-columns\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"artist.schlunegger\"],null,2],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Danielle Schlunegger creates faux taxidermy animals out of fake fur and old books.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"She is showing a few bear heads and cave bobcats at Red Fox Bar in North Portland for the month of Februaru 2017. Schlunegger-Warner's reception is \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Sunday Febrtuary 12th\"],[\"close-element\"],[\"text\",\", 7-9pm.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12 col-sm-6 col-md-6 col-lg-4\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"artist.berlin\"],null,1],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"marketing-columns\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"arist.berlin\"],null,0],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Jason Berlin will be showing collages at Red Fox in North Portland March 2017.\\n\\n\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Jason Berlin\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/berlin348x220.jpg\"],[\"static-attr\",\"alt\",\"Jason Berlin Thomas\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Danielle Schlunegger-Warner\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/schlunegger348x220.jpg\"],[\"static-attr\",\"alt\",\"Danielle Schlunegger-Warner\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Rachel Mulder\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/mulder348x220.jpg\"],[\"static-attr\",\"alt\",\"Rachel Mulder\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/index.hbs" } });
});
define("verge-ember/templates/page-not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fqEoIVWF", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Oops\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Something went wrong. Go back to the \"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"text\",\".\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Homepage\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/page-not-found.hbs" } });
});
define("verge-ember/templates/venues", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yNh7yUWe", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Venues\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"venues\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12 col-md-6\"],[\"flush-element\"],[\"text\",\"\\n \\t\\t\\t\"],[\"append\",[\"helper\",[\"venue-list\"],null,[[\"venueList\"],[[\"get\",[\"venueList\"]]]]],false],[\"text\",\"\\n      \\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"venueList\"]}],\"hasPartials\":false}", "meta": { "moduleName": "verge-ember/templates/venues.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('verge-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'verge-ember';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("verge-ember/app")["default"].create({"name":"verge-ember","version":"0.0.0+456a9f22"});
}

/* jshint ignore:end */
//# sourceMappingURL=verge-ember.map
