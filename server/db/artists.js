const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("artists", {
  firstName: {
    type: Sequelize.STRING,
    // allowNull: false,
    // notEmpty: true
  },
  lastName: {
    type: Sequelize.STRING,
    defaultValue: ""
  },
  born: {
    type: Sequelize.STRING,
    // allowNull: false
  }
  
});
