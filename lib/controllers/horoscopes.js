const { Router } = require('express');
const { horoSigns } = require('../horoscope-data.js');

module.exports = Router().get('/:sign', (req, res) => {
  let match;
  for (const horoSign of horoSigns) {
    if (horoSign.sign === req.params.sign) {
      match = horoSign;
    }
  }
  return res.json(match.horoscope);
});
