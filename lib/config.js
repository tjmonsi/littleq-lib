/**
 * LittleQ configuration namespace
 * @namespace LittleQ.config
 */
LittleQ.config = {};

 /**
 * Subscriptions namespace
 * @namespace LittleQ.subscriptions
 */
LittleQ.subscriptions = [];

/**
 * Add a subscription to be preloaded
 * @param {string} subscription - The name of the subscription
 */
LittleQ.subscriptions.preload = function (subscription) {
  LittleQ.subscriptions.push(subscription);
};