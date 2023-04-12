'use strict';

/**
 * stripe-cart router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::stripe-cart.stripe-cart');
