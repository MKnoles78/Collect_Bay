module.exports = function (sequelize, DataTypes){
  const Toy = sequelize.define("Toy", {
    category: {
      type: DataTypes.STRING,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quality: {
      type: DataTypes.STRING,
      allowNull: false}
  });
  // Toy.associate = models => {
  //   Toy.belongsTo(models.Collection, {
  //     as: "toys"
  //   },
  //   { timestamps: false }
  //   );

  // };
  return Toy;
};

