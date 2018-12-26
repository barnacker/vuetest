const { authenticate } = require('@feathersjs/authentication').hooks;
const { postCardActivity } = require('../../hooks/activities');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [postCardActivity],
    update: [postCardActivity],
    patch: [postCardActivity],
    remove: [postCardActivity]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
