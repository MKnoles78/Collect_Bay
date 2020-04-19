module.exports = function (sequelize, DataTypes){
  const Stamp = sequelize.define("Stamp", {
    category: {
      type: DataTypes.STRING,
    },
    origincountry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postmark: {
      type: DataTypes.STRING,
    },
    quality: {type: DataTypes.STRING,
      allowNull: false}
  },
  { timestamps: false }
  );

  // Stamp.associate = models => {
  //   Stamp.belongsTo(models.Collection, {
  //     as: "stamps"
  //   });
  // };

  return Stamp;
};


