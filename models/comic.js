module.exports = function (sequelize, DataTypes){
  const Comic = sequelize.define("Comic", {
    category: {
      type: DataTypes.STRING,
      validate: {
        equals: "Comics"
      }
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issue: {
      type: DataTypes.INTEGER,
      isNumeric: true
    },
    quality: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
  );

  // Comic.associate = models => {
  //   Comic.belongsTo(models.Collection, {
  //     as: "comics"
  //   });
  // };
  return Comic;
};

