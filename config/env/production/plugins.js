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
  // email: {
  //   config: {
  //     provider: "nodemailer",
  //     providerOptions: {
  //       host: env("SMTP_HOST"),
  //       port: env("SMTP_PORT"),
  //       auth: {
  //         user: env("SMTP_USERNAME"),
  //         pass: env("SMTP_PASSWORD"),
  //       },
  //     },
  //     settings: {
  //       defaultFrom: "roicoroy@yahoo.com.br",
  //       defaultReplyTo: "roicoroy@yahoo.com.br",
  //       testAddress: "ricardo_watanabe_bento@outlook.com",
  //     },
  //   },
  // },
});
