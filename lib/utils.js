/**
 * The global namespace for LittleQ utils.
 * @namespace LittleQ.utils
 */
LittleQ.utils = {};

/**
 * Returns the user defined site URL or Meteor.absoluteUrl
 */

LittleQ.utils.getSiteUrl = function() {
  if (Settings) return Settings.get("siteUrl", Meteor.absoluteUrl())
  else return "localhost"
}

/**
 * Convert a camelCase string to dash-separated string
 * @param {String} str
 */
 
LittleQ.utils.camelToDash = function(str) {
  return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Convert an underscore-separated string to dash-separated string
 * @param {String} str
 */
 
LittleQ.utils.underscoreToDash = function(str) {
  return str.replace('_', '-');
}

/**
 * Convert a dash separated string to camelCase.
 * @param {String} str
 */
LittleQ.utils.dashToCamel = function(str) {
  return str.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
};

/**
 * Convert a string to camelCase and remove spaces.
 * @param {String} str
 */
LittleQ.utils.camelCaseify = function(str) {
  return this.dashToCamel(str.replace(' ', '-'));
};

/**
 * Trim a sentence to a specified amount of words and append an ellipsis.
 * @param {String} s - Sentence to trim.
 * @param {Number} numWords - Number of words to trim sentence to.
 */
LittleQ.utils.trimWords = function(s, numWords) {
  var expString = s.split(/\s+/,numWords);
  if(expString.length >= numWords)
    return expString.join(" ")+"…";
  return s;
};

/**
 * Capitalize a string.
 * @param {String} str
 */
LittleQ.utils.capitalise = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

LittleQ.utils.t = function(message) {
  var d = new Date();
  console.log("### "+message+" rendered at "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
};

LittleQ.utils.nl2br = function(str) {
  var breakTag = '<br />';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
};

LittleQ.utils.scrollPageTo = function(element, target, offsetTop, offsetLeft){
  $(element).scrollTo({top: $(target).offset().top-offsetTop, left: $(target).offset().left-offsetLeft})
}

LittleQ.utils.getDateRange = function(pageNumber) {
  var now = moment(new Date());
  var dayToDisplay=now.subtract(pageNumber-1, 'days');
  var range={};
  range.start = dayToDisplay.startOf('day').valueOf();
  range.end = dayToDisplay.endOf('day').valueOf();
  // console.log("after: ", dayToDisplay.startOf('day').format("dddd, MMMM Do YYYY, h:mm:ss a"));
  // console.log("before: ", dayToDisplay.endOf('day').format("dddd, MMMM Do YYYY, h:mm:ss a"));
  return range;
};

LittleQ.utils.slugify = function(text) {
  if(text){
    text = text.replace(/[^-_a-zA-Z0-9,&\s]+/ig, '');
    text = text.replace(/\s/gi, "-");
    text = text.toLowerCase();
  }
  return text;
};

LittleQ.utils.getShortUrl = function(post) {
  return post.shortUrl || post.url;
};

LittleQ.utils.getDomain = function(url) {
  var urlObject = Npm.require('url');
  return urlObject.parse(url).hostname.replace('www.', '');
};

/////////////////////////////
// String Helper Functions //
/////////////////////////////

LittleQ.utils.cleanUp = function(s) {
  return this.stripHTML(s);
};

LittleQ.utils.sanitize = function(s) {
  // console.log('// before sanitization:')
  // console.log(s)
  if(Meteor.isServer){
    s = sanitizeHtml(s, {
      allowedTags: [
        'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul',
        'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike',
        'code', 'hr', 'br', 'div', 'table', 'thead', 'caption',
        'tbody', 'tr', 'th', 'td', 'pre', 'img'
      ]
    });
    // console.log('// after sanitization:')
    // console.log(s)
  }
  return s;
};

LittleQ.utils.stripHTML = function(s) {
  return s.replace(/<(?:.|\n)*?>/gm, '');
};

LittleQ.utils.stripMarkdown = function(s) {
  var html_body = marked(s);
  return stripHTML(html_body);
};

// http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key
LittleQ.utils.checkNested = function(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments);
  obj = args.shift();

  for (var i = 0; i < args.length; i++) {
    if (!obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
};

LittleQ.log = function (s) {
  if(Settings && Settings.get('debug', false)) console.log(s);
};

// see http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string
LittleQ.getNestedProperty = function (obj, desc) {
  var arr = desc.split(".");
  while(arr.length && (obj = obj[arr.shift()]));
  return obj;
}