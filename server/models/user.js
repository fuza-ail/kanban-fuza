'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class User extends Model{

  }

  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        notEmpty:true,
        notNull:true
      }
    },
    password: DataTypes.STRING,
    organization: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    sequelize,
    hooks:{
      beforeCreate: function(user,option){
        user.organization = 'Hacktiv8'
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};