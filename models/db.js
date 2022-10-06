const { Sequelize, DataTypes } = require("sequelize");
//conexão
/*const sequelize = new Sequelize("postapp", "root", "777777", {
  host: "localhost",
  dialect: "mysql",
});*/

//'database'
const sequelize = new Sequelize("postapp", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  query: { raw: true },
});

module.exports = {
  Sequelize: Sequelize,
  DataTypes: DataTypes,
  sequelize: sequelize,
};
