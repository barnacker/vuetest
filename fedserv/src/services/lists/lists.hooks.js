const { authenticate } = require('@feathersjs/authentication').hooks;
const { isBoardOwner } = require('../../hooks/authorization');
const { postListActivity } = require('../../hooks/activities');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [isBoardOwner],
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
    create: [postListActivity],
    update: [postListActivity],
    patch: [postListActivity],
    remove: [postListActivity]
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
