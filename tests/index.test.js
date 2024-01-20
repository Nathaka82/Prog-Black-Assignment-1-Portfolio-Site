const request = require('supertest');
const server = require('../server');

describe('Test the things service', () => {
  test('GET /tags succeeds', () => {
    return request(server)
    .get('/intro')
    .expect(200);
  });
});