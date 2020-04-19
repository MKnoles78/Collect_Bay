module.exports = function (sequelize, DataTypes){
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
  });

  // User.associate = function(models){
  //   User.belongsToMany(models.Collection, {
  //     through: "UserCollections",
  //     foreignKey: "userId",
  //   });

  // };

  User.associate = models => {
    User.hasMany(models.Collection, {
      as: "CollectionId"
    });
  };
  return User;
};

