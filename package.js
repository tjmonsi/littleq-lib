Package.describe({
  name: 'tjmonsi:littleq-lib',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Lib core packages for all LittleQ projects - Copied from Telescope',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    // Basic
    "meteor-platform",
    "reactive-var",
    "http",
    "email",
    "tap:i18n",
    // Copied from Telescope
    // For Users
    "service-configuration",
    "accounts-base",
    "accounts-twitter",
    "accounts-facebook",
    "accounts-password",
    "accounts-google",
    // For Schema Creation
    "aldeed:simple-schema",
    "aldeed:collection2",
    "aldeed:autoform",
    "gildaspk:autoform-materialize",
    "aldeed:template-extension",
    "dburles:collection-helpers",
    "chuangbo:marked",
    "meteorhacks:fast-render",
    "meteorhacks:subs-manager",
    "percolate:synced-cron",
    "momentjs:moment",
    "aslagle:reactive-table",
    "utilities:avatar",
    "djedi:sanitize-html",
    "jparker:gravatar",
    "sanjo:meteor-files-helpers",
    "cmather:handlebars-server",
    "chuangbo:cookie",
    "ongoworks:speakingurl",
    // Using FlowRouter
    "meteorhacks:flow-router",
    "meteorhacks:flow-layout",
    // Copied from Previous VMs
    "dbernhard:jquery-ui-draggable",
    "edgee:slingshot",
    "gadicohen:headers",
    // "hpx7:youtube-iframe-player",
    "johnantoni:meteor-scrollto",
    "less",
    "meteorhacks:zones",
    "mquandalle:jquery-textcomplete",
    // "ryanswapp:fabricjs",
    "sewdn:rangy",
    "underscore",
    // For Materialize
    "useraccounts:materialize",
    "materialize:materialize"
  ]
  
  api.use(packages);
  
  api.imply(packages);
  
  api.addFiles([
    "lib/core.js",
    "lib/utils.js",
    "lib/callbacks.js",
    'lib/collections.js',
    'lib/modules.js',
    'lib/config.js',
    'lib/deep.js',
    'lib/deep-extend.js',
    'lib/autolink.js',
    'lib/themes.js',
    'lib/menus.js',
    'lib/base.js',
    'lib/error.js',
    // 'lib/colors.js',
    // 'lib/icons.js'
  ], ["client", "server"])
  
  api.addFiles([
    'lib/client/jquery-exists.js',
  ], ['client']);
  
  // Generated with: github.com/philcockfield/meteor-package-paths
  
  api.export([
    'LittleQ',
    // '_',
    'getTemplate',
    // 'templates',
    // 'themeSettings',
    'getVotePower'
  ]);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tjmonsi:littleq-lib');

  // Generated with: github.com/philcockfield/meteor-package-paths
  

});
