module.exports = function (sequelize, DataTypes){
  const Record = sequelize.define("Record", {
    category: {
      type: DataTypes.STRING,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    album: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quality: {
      type: DataTypes.STRING,
      allowNull: false}
  },
  { timestamps: false }
  );

  // Record.associate = models => {
  //   Record.belongsTo(models.Collection, {
  //     as: "records"
  //   });

  // };
  return Record;
};