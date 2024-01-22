const request = require('supertest');
const app = require('../app');

describe('Test express server (Misc)', () => {
  test('GET /intro succeeds', () => {
    return request(app)
    .get('/intro')
    .expect(200);
  });
});

describe('Test express server (Projects)', () => {
  test('GET /projects/list succeeds', () => {
    return request(app)
    .get('/projects/list')
    .expect(200);
  });
  test('GET /projects/project (id = 0) succeeds', () => {
    return request(app)
    .get('/projects/project?id=0')
    .expect(200);
  });
  test('GET /projects/project (id = 1) succeeds', () => {
    return request(app)
    .get('/projects/project?id=1')
    .expect(200);
  });
  test('GET /projects/project (id = -1) fails', () => {
    return request(app)
    .get('/projects/project?id=-1')
    .expect(404);
  });
  test('GET /projects/project (id = "abc") fails', () => {
    return request(app)
    .get('/projects/project?id=abc')
    .expect(404);
  });
  test('GET /projects/tags succeeds', () => {
    return request(app)
    .get('/projects/tags')
    .expect(200);
  });

  // test('GET /projects/create succeeds', () => {
  //   return request(app)
  //   .post('/projects/create')
  //   .expect(200);
  // });
});

describe('Test express server (CV)', () => {
  test('GET /cv/skills succeeds', () => {
    return request(app)
    .get('/cv/skills')
    .expect(200);
  });
  test('GET /cv/education succeeds', () => {
    return request(app)
    .get('/cv/education')
    .expect(200);
  });
  test('GET /cv/work_experience succeeds', () => {
    return request(app)
    .get('/cv/work_experience')
    .expect(200);
  });
  test('GET /cv/hobbies succeeds', () => {
    return request(app)
    .get('/cv/hobbies')
    .expect(200);
  });
  test('GET /cv/contact succeeds', () => {
    return request(app)
    .get('/cv/contact')
    .expect(200);
  });
});