const request = require('supertest');
const app = require('../app');

describe('Test the things service', () => {
  test('GET /tags succeeds', () => {
    return request(app)
    .get('/intro')
    .expect(200);
  });
});