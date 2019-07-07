const models = require('../models');

const directors = (req, res) => {
  const titleName = req.params.name;
  models.Titles.findOne({
    where: {
      primarytitle: titleName,
    },
    include: [{ model: models.Directors, as: 'directors' }],
  }).then((titles) => {
    res.send(titles);
  });
};

module.exports = directors;
