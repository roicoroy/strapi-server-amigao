module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  "strapi-plugin-fcm": {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-fcm",
  },
  'amigao': {
    enabled: true,
    resolve: "./src/plugins/amigao",
  },
  "strapi-plugin-passwordless": {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-passwordless",
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "roicoroy@mercadoamigao.com",
        defaultReplyTo: "roicoroy@mercadoamigao.com",
        testAddress: "roicoroy@mercadoamigao.com",
      },
    },
  },
});
