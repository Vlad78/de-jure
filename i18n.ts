import { getRequestConfig } from 'next-intl/server';


export default getRequestConfig(async ({ locale }) => {
  return {
    // The time zone can either be statically defined, read from the
    // user profile if you store such a setting, or based on dynamic
    // request information like the locale or a cookie.
    timeZone: "Europe/Warsaw",
  };
});
