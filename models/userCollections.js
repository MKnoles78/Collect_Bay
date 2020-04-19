module.exports = function (sequelize, DataTypes){
  const UserCollections = sequelize. define(
    "UserCollections",
    {
      userId: DataTypes.INTEGER,
      collectionId: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  return UserCollections;
};