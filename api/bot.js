const { bot } = require('../api/bot.js'); 

module.exports = (req, res) => {
  const body = req.body;

  bot.processUpdate(body);
  res.status(200).send({ status: 'ok' });
};
