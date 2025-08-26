const request = require('supertest');
const { app, server } = require('./app');

describe('GET /', () => {
  test('should respond with "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

afterAll(() => {
  server.close();
});
