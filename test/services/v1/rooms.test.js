const app = require('../../../src/app');

describe('\'v1/rooms\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/rooms');
    expect(service).toBeTruthy();
  });
});
