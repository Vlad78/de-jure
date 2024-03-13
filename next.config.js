/** @type {import('next').NextConfig} */
// const defaultLocale = /** @type {"en" | "pl" | "ru"} */ "en";
const defaultLocale = "en";
const locales = /** @type {(typeof defaultLocale)[]} */ ["ru", "pl", "en"];

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: { locales, defaultLocale },

  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
