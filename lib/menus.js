/**
 * Menus namespace
 * @namespace LittleQ.menuItems
 */
LittleQ.menuItems = {};

/**
 * Add one or more items to a menu
 * @param {string} menu - The name of the menu
 * @param {Object|Object[]} item - The menu item object (or an array of items)
 *
 * @example <caption>Using a named route</caption>
 * LittleQ.menuItems.add("viewsMenu", {
 *   route: 'postsDaily',
 *   label: 'daily',
 *   description: 'day_by_day_view'
 * });
 *
 * @example <caption>Using a route function</caption>
 * LittleQ.menuItems.add("userMenu", {
 *   route: function () {
 *     return Router.path('user_profile', {_idOrSlug: Meteor.user().LittleQ.slug});
 *   },
 *   label: 'profile',
 *   description: 'view_your_profile'
 * });
 *
 */
LittleQ.menuItems.add = function (menu, item) {

  // if menu items array doesn't exist yet, initialize it
  if (typeof LittleQ.menuItems[menu] === "undefined") {
    LittleQ.menuItems[menu] = [];
  }

  if (Array.isArray(item)) {

    var items = item; // we're dealing with an Array, so let's add an "s"
    items.forEach( function (item) {
      LittleQ.menuItems[menu].push(item);
    });

  } else {

    LittleQ.menuItems[menu].push(item);

  }
};

/**
 * Remove an item from a menu
 * @param {string} menu - The name of the menu
 * @param {string} label - The label of the item to remove
 */
LittleQ.menuItems.remove = function (menu, label) {
  LittleQ.menuItems[menu] = _.reject(LittleQ.menuItems[menu], function (menu) {
    return menu.label === label;
  });
};

/**
 * Retrieve an array containing all items for a menu
 * @param {string} menu - The name of the menu
 */
LittleQ.menuItems.get = function (menu) {
  return _.sortBy(LittleQ.menuItems[menu], "order");
};