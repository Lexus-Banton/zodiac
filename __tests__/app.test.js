const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../lib/signs-data');

describe('zodiac route', () => {
  it('/signs should return list of signs', async () => {
    const res = await request(app).get('/signs');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expected(res.body).toEqual(expected);
  });
});
