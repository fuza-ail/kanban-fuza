'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Task extends Model{

  }

  Task.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true
      }
    },
    category: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true
      }
    },
    status: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  },{sequelize})

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User)
  };
  return Task;
};