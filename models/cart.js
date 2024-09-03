const db = require("../util/database");
const Sequelize = require("sequelize");

const Cart = db.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
