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
  test('GET /projects/list returns JSON', () => {
    return request(app)
    .get('/projects/list')
    .expect('Content-type', /json/);
  });

  test('GET /projects/project (id = 0) succeeds', () => {
    return request(app)
    .get('/projects/project?id=0')
    .expect(200);
  });
  test('GET /projects/project (id = 0) returns JSON', () => {
    return request(app)
    .get('/projects/project?id=0')
    .expect('Content-type', /json/);
  });

  test('GET /projects/project (id = 1) succeeds', () => {
    return request(app)
    .get('/projects/project?id=1')
    .expect(200);
  });
  test('GET /projects/project (id = 1) returns JSON', () => {
    return request(app)
    .get('/projects/project?id=1')
    .expect('Content-type', /json/);
  });

  test('GET /projects/project (id = -1) fails', () => {
    return request(app)
    .get('/projects/project?id=-1')
    .expect(404);
  });
  test('GET /projects/project (id = -1) returns Text', () => {
    return request(app)
    .get('/projects/project?id=-1')
    .expect('Content-type', /text/);
  });

  test('GET /projects/project (id = "abc") fails', () => {
    return request(app)
    .get('/projects/project?id=abc')
    .expect(404);
  });
  test('GET /projects/project (id = "abc") returns Text', () => {
    return request(app)
    .get('/projects/project?id="abc"')
    .expect('Content-type', /text/);
  });

  test('GET /projects/tags succeeds', () => {
    return request(app)
    .get('/projects/tags')
    .expect(200);
  });
  test('GET /projects/tags returns JSON', () => {
    return request(app)
    .get('/projects/tags')
    .expect('Content-type', /json/);
  });

  test('POST /projects/create succeeds', () => {
    const data = new URLSearchParams({title: "1234", description: "1234", github: " ", tags: "a,b,c"}).toString();
    return request(app)
    .post('/projects/create')
    .send(data)
    .expect(200);
  });
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