module.exports = function (sequelize, DataTypes){
  const Card = sequelize.define("Card", {
    category: {
      type: DataTypes.STRING,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    player: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      isNumeric: true
    },
    quality: {
      type: DataTypes.STRING,
      allowNull: false
    },

  },
  { timestamps: false }
  );

  // Card.associate = models => {
  //   Card.belongsTo(models.Collection, {
  //     as: "cards"
  //   });
  // };

  return Card;
};



