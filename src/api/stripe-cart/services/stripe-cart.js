'use strict';

/**
 * stripe-cart service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stripe-cart.stripe-cart');
