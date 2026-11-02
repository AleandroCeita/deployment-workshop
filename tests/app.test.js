import { describe, expect, it } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('returns the welcome message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Hello from Render!',
    });
  });
});
/*tests Aleandro*/
describe('GET /health', () => {
  it('reports that the API is healthy', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  it('returns a JSON response', async () => {
    const response = await request(app).get('/health');

    expect(response.headers['content-type']).toMatch(/json/);
  });
});

describe('Unknown routes', () => {
  it('returns 404 for an unknown URL', async () => {
    const response = await request(app).get('/does-not-exist');

    expect(response.status).toBe(404);
  });
});

describe('Response headers', () => {
  it('serves JSON on the root route', async () => {
    const response = await request(app).get('/');

    expect(response.headers['content-type']).toMatch(/json/);
  });
});