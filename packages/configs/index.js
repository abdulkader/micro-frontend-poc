module.exports = {
  mode: process.env.NODE_ENV,
  container: {
    port: process.env.CONTAINER_APP_PORT,
    appUrl: process.env.CONTAINER_APP_URL,
    publicPath: process.env.CONTAINER_APP_PUBLIC_PATH,
  },
  catalog: {
    port: process.env.CATALOG_APP_PORT,
    appUrl: process.env.CATALOG_APP_URL,
    publicPath: process.env.CATALOG_APP_PUBLIC_PATH,
  },
  components: {
    port: process.env.COMPONENTS_APP_PORT,
    appUrl: process.env.COMPONENTS_APP_URL,
    publicPath: process.env.COMPONENTS_APP_PUBLIC_PATH,
  },
};
