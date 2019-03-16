const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("artists", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  born: {
    type: Sequelize.INTEGER
  }
});
