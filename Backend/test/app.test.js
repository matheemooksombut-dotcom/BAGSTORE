const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app');

const withServer = async (callback) => {
  const server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));

  try {
    await callback(server.address().port);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
};

test('GET /api/health returns API status', async () => {
  await withServer(async (port) => {
    const response = await fetch(`http://127.0.0.1:${port}/api/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.success, true);
  });
});

test('unknown route returns JSON 404', async () => {
  await withServer(async (port) => {
    const response = await fetch(`http://127.0.0.1:${port}/api/unknown`);
    const body = await response.json();

    assert.equal(response.status, 404);
    assert.equal(body.success, false);
  });
});
