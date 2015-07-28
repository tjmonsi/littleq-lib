/**
 * Template modules let you insert templates in specific zones in the app's layout. 
 * @namespace LittleQ.modules
 */

LittleQ.modules = {};

/**
 * Add a module to a template zone
 * @param {string} zone - The name of the zone
 * @param {Object|Object[]} module - The module object (or an array of modules)
 * @param {string} module.template - The template to include
 * @param {number} module.order - The order of the template in the zone
 *
 * @example
 * LittleQ.modules.add("hero", {
 *   template: "newsletterBanner",
 *   order: 10
 * });
 */
LittleQ.modules.add = function (zone, module) {

  // if module zone array doesn't exist yet, initialize it
  if (typeof LittleQ.modules[zone] === "undefined") {
    LittleQ.modules[zone] = [];
  }

  if (Array.isArray(module)) {

    var modules = module; // we're dealing with an Array, so let's add an "s"
    modules.forEach( function (module) {
      LittleQ.modules[zone].push(module);
    });

  } else {

    LittleQ.modules[zone].push(module);

  }
};

/**
 * Remove a module from a zone
 * @param {string} zone - The name of the zone
 * @param {string} template - The name of the template to remove
 */
LittleQ.modules.remove = function (zone, template) {
  LittleQ.modules[zone] = _.reject(LittleQ.modules[zone], function (module) {
    return module.template === template;
  });
};

/**
 * Removes all modules from a zone
 * @param {string} zone - The name of the zone
 */
LittleQ.modules.removeAll = function (zone) {
  LittleQ.modules[zone] = [];
};

/**
 * Retrieve an array containing all modules for a zone
 * @param {string} zone - The name of the zone
 * @returns {Object[]} Returns a sorted array of the zone's modules
 */
LittleQ.modules.get = function (zone) {
  return _.sortBy(LittleQ.modules[zone], "order");
};