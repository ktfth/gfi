const v1Rooms = require('./v1/rooms/rooms.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(v1Rooms);
};
