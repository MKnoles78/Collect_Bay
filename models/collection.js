module.exports = function (sequelize, DataTypes){
  const Collection = sequelize. define("Collection", {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    itemNum: DataTypes.INTEGER,
  });

  // Collection.associate = function (models) {
  //   Collection.belongsToMany(models.User, {
  //     through: "UserCollections",
  //     foreignKey: "collectionId",
  //   });
  // };
  return Collection;
};

