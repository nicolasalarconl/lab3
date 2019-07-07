/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
  const Titles = sequelize.define('Titles', {
    tconst: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    titletype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    primarytitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    originaltitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'titles',
    timestamps: false,
  });
  Titles.associate = (models) => {
    Titles.belongsToMany(models.Directors, {
      through: 'TitlesDirectors',
      as: 'directors',
      foreignKey: 'tconst',
    });
  };
  return Titles;
};
