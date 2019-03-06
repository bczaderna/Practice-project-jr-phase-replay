const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("photographs", {
  date: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    // notEmpty: true
  },
  name: {
    type: Sequelize.STRING,
  },
  place: {
    type: Sequelize.STRING,
    // allowNull: false,
    // notEmpty: true
  },
  price: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    // notEmpty: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ""
  },
  size: {
    type: Sequelize.INTEGER,
    validate: {
      //max size here
    },
  }
});
