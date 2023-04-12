'use strict';

/**
 * stripe-cart controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::stripe-cart.stripe-cart');
