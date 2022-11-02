const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../lib/zodiac-data.js');

describe('signs route', () => {
  it('/signs should return list of signs', async () => {
    const res = await request(app).get('/signs');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/signs/:id should return sign detail', async () => {
    const res = await request(app).get('/signs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
});

describe('horoSigns routes', () => {
  it('/horoscopes/:sign should return horoscope by sign', async () => {
    const res = await request(app).get('/horoscopes/capricorn');
    const capricorn = {
      id: '4',
      sign: 'capricorn',
      horoscope: 'Screw any relationship that does not make you money',
    };
    expect(res.body).toEqual(capricorn.horoscope);
  });
});
