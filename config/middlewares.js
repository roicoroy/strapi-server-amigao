module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: ['*']
    }
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  // {
  //   name: "strapi::body",
  //   config: {
  //     formLimit: "256mb", // modify form body
  //     jsonLimit: "256mb", // modify JSON body
  //     textLimit: "256mb", // modify text body
  //     formidable: {
  //       maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
  //     },
  //   },
  // },
  'strapi::session',
  "strapi::favicon",
  "strapi::public",
];
