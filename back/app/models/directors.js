/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
  const Directors = sequelize.define('Directors', {
    nconst: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    primaryname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    primaryprofession: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'directors',
    timestamps: false,
  });
  Directors.associate = (models) => {
    Directors.belongsToMany(models.Titles, {
      through: 'TitlesDirectors',
      as: 'directors',
      foreignKey: 'directors',
    });
  };
  return Directors;
};
