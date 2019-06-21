'use strict';
module.exports = (sequelize, DataTypes) => {
  const fitness = sequelize.define('fitness', {
    firstName: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    floors: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {});
  fitness.associate = function(models) {
    // associations can be defined here
  };
  return fitness;
};