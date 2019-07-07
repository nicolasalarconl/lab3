/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
  const TitlesDirectors = sequelize.define('TitlesDirectors', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tconst: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Titles',
        key: 'tconst',
      },
    },
    directors: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Directors',
        key: 'nconst',
      },
    },
  }, {
    tableName: 'titles_directors',
    timestamps: false,
  });
  return TitlesDirectors;
};
