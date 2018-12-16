const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [
      hooks.restrictToOwner({ idField: '_id', ownerField: 'ownerId' })
    ],
    get: [
      hooks.restrictToOwner({ idField: '_id', ownerField: 'ownerId' })
    ],
    create: [
      hooks.associateCurrentUser({ idField: '_id', as: 'ownerId' })
    ],
    update: [
      hooks.restrictToOwner({ idField: '_id', ownerField: 'ownerId' })
    ],
    patch: [
      hooks.restrictToOwner({ idField: '_id', ownerField: 'ownerId' })
    ],
    remove: [
      hooks.restrictToOwner({ idField: '_id', ownerField: 'ownerId' })
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
