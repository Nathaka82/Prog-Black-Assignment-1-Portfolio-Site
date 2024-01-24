/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

// Misc API Tests
describe('Test express server (Misc)', () => {
  test('GET /intro succeeds', () => {
    return request(app)
    .get('/intro')
    .expect(200);
  });
});

// Projects API Tests
describe('Test express server (Projects)', () => {
  // List (This will always succeed due to the nature of the request)
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
  test('GET /projects/list?search=unity succeeds', () => {
    return request(app)
    .get('/projects/list?search=unity')
    .expect(200);
  });
  test('GET /projects/list?search=unity succeeds', () => {
    return request(app)
    .get('/projects/list?search=unity')
    .expect('Content-type', /json/);
  });
  test('GET /projects/list?search= succeeds', () => {
    return request(app)
    .get('/projects/list?search=')
    .expect(200);
  });
  test('GET /projects/list?search= succeeds', () => {
    return request(app)
    .get('/projects/list?search=')
    .expect('Content-type', /json/);
  });
  // Again, this should succeed
  test('GET /projects/list?search=this_is_not_a_used_tag succeeds', () => {
    return request(app)
    .get('/projects/list?search=this_is_not_a_used_tag')
    .expect(200);
  });
  test('GET /projects/list?search=this_is_not_a_used_tag succeeds', () => {
    return request(app)
    .get('/projects/list?search=this_is_not_a_used_tag')
    .expect('Content-type', /json/);
  });

  // Project (id = 0)
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

  // Project (id = 1)
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

  // Project (id = -1)
  test('GET /projects/project (id = -1) fails', () => {
    return request(app)
    .get('/projects/project?id=-1')
    .expect(404);
  });

  // Project (id = abc)
  test('GET /projects/project (id = abc) fails', () => {
    return request(app)
    .get('/projects/project?id=abc')
    .expect(404);
  });

  // Tags
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

  // Create (Valid Body)
  test('POST /projects/create with valid body succeeds', () => {
    const data = new URLSearchParams({ title: 'Test Project', description: 'This is a test!', github: 'http://nathanielhughes.co.uk', tags: 'test,nathaniel,js,coursework' }).toString();
    return request(app)
    .post('/projects/create')
    .send(data)
    .expect(200);
  });
  test('POST /projects/create with missing body returns 400', () => {
    return request(app)
    .post('/projects/create')
    .expect(400);
  });
  test('POST /projects/create with missing title returns 400', () => {
    const data = new URLSearchParams({ description: 'This is a test!', github: 'http://nathanielhughes.co.uk', tags: 'test,nathaniel,js,coursework' }).toString();
    return request(app)
    .post('/projects/create')
    .send(data)
    .expect(400);
  });
  test('POST /projects/create with missing description returns 400', () => {
    const data = new URLSearchParams({ title: 'Test Project', github: 'http://nathanielhughes.co.uk', tags: 'test,nathaniel,js,coursework' }).toString();
    return request(app)
    .post('/projects/create')
    .send(data)
    .expect(400);
  });
  test('POST /projects/create with invalid body fails', () => {
    const data = new URLSearchParams({ ti71e: 'Test Project', D3scr1pt1on: 'This is a test!', hubgit: 'http://nathanielhughes.co.uk', tagsss: 'test,nathaniel,js,coursework' }).toString();
    return request(app)
    .post('/projects/create')
    .send(data)
    .expect(400);
  });
});

// CV API Tests
describe('Test express server (CV)', () => {
  // Skills
  test('GET /cv/skills succeeds', () => {
    return request(app)
    .get('/cv/skills')
    .expect(200);
  });
  test('GET /cv/skills returns JSON', () => {
    return request(app)
    .get('/cv/skills')
    .expect('Content-type', /json/);
  });

  // Education
  test('GET /cv/education succeeds', () => {
    return request(app)
    .get('/cv/education')
    .expect(200);
  });
  test('GET /cv/education returns JSON', () => {
    return request(app)
    .get('/cv/education')
    .expect('Content-type', /json/);
  });

  // Work Experience
  test('GET /cv/work_experience succeeds', () => {
    return request(app)
    .get('/cv/work_experience')
    .expect(200);
  });
  test('GET /cv/work_experience returns JSON', () => {
    return request(app)
    .get('/cv/work_experience')
    .expect('Content-type', /json/);
  });

  // Hobbies
  test('GET /cv/hobbies succeeds', () => {
    return request(app)
    .get('/cv/hobbies')
    .expect(200);
  });
  test('GET /cv/hobbies succeeds', () => {
    return request(app)
    .get('/cv/hobbies')
    .expect('Content-type', /json/);
  });

  // Contact
  test('GET /cv/contact succeeds', () => {
    return request(app)
    .get('/cv/contact')
    .expect(200);
  });
  test('GET /cv/contact succeeds', () => {
    return request(app)
    .get('/cv/contact')
    .expect('Content-type', /json/);
  });
});
