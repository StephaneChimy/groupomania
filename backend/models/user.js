"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Message);
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      password: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      emailHash: DataTypes.STRING,
      lock_until: DataTypes.STRING,
      login_attempts: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
