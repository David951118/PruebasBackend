const { config } = require('./../config/config');
console.log('DB User:', config.dbUser);
console.log('DB Password:', config.dbPassword);
console.log('DB Host:', config.dbHost);
console.log('DB Name:', config.dbName);
console.log('DB Port:', config.dbPort);
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
