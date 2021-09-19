// Initializes the `v1/rooms` service on path `/v1/rooms`
const { Rooms } = require('./rooms.class');
const hooks = require('./rooms.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/rooms', new Rooms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/rooms');

  service.hooks(hooks);
};
