module.exports = function (sequelize, DataTypes){
  const Stamp = sequelize.define("Stamp", {
    category: {
      type: DataTypes.STRING,
      validate: {
        equals: "Stamps"
      }
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
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    quality: {type: DataTypes.STRING,
      allowNull: false}
  });
  Stamp.associate = models => {
    Stamp.belongsTo(models.Collection, {
      as: "stamps"
    });
  };

  return Stamp;
};


