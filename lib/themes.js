/**
 * LittleQ theme settings and methods.
 * @namespace LittleQ.theme
 */
LittleQ.theme = {};

/**
 * Default settings for LittleQ themes.
 * @type {Object}
 */
LittleQ.theme.settings = {
  useDropdowns: true // Enable/disable dropdown menus in a theme
};

/**
 * Get a theme setting value.
 * @param {String} setting
 * @param {String} defaultValue
 */
LittleQ.theme.getSetting = function (setting, defaultValue) {
  if (typeof this.settings[setting] !== 'undefined') {
    return this.settings[setting];
  } else {
    return typeof defaultValue === 'undefined' ? '' : defaultValue;
  }
};