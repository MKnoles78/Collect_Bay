module.exports = function (sequelize, DataTypes){
  const Connect = sequelize.define("Connect", {
    author: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  );


  return Connect;
};