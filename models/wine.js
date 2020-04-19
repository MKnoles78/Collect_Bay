module.exports = function (sequelize, DataTypes){
  const Wine = sequelize.define("Wine", {
    category: {
      type: DataTypes.STRING,
    },
    vineyard: {
      type: DataTypes.STRING,
      allowNull: false
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false
    },
    variety: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vintage: {
      type: DataTypes.INTEGER,
      isNumeric: true
    },
    winegrade: {
      type: DataTypes.INTEGER,
      isNumeric: true
    }
  },
  { timestamps: false }
  );

  Wine.associate = models => {
    Wine.belongsTo(models.Collection, {
      as: "wines"
    });
  };
  return Wine;
};