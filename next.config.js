const withSass = require("@zeit/next-sass");
const p = process.env.NODE_ENV === "production";

module.exports = withSass({
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };

    return config;
  },
  env: {
    api: p ? "/api" : "http://localhost:4200",
  },
});
