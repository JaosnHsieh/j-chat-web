module.exports = {
  apps: [
    {
      name: "j-chat-app",
      script: "./server.js",
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 3001,
        NODE_ENV: "production",
        REACT_APP_API_URL: "https://apiurl/api",
        REACT_APP_WS_URL: "apiurl"
      }
    }
  ]
};
