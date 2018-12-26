const mongoose = require('mongoose');

const actionVerbs = (action) => {
  const actionVerb = new Map();
  actionVerb.set('create', 'created');
  actionVerb.set('remove', 'removed');
  actionVerb.set('patch', 'modified');
  actionVerb.set('update', 'modified');
  return actionVerb.get(action);
};

const entities = (name) => {
  const entity = new Map();
  entity.set('boards', 'board');
  entity.set('lists', 'list');
  entity.set('cards', 'card');
  return entity.get(name);
};

const simpleUser = (context) => {
  return (({ _id, username, displayname, email }) => ({ _id, username, displayname, email }))(context.params.user);
};

async function postActivity(context, boardId, entityDescription) {
  const activities = mongoose.model('activities');
  await activities.create({
    action: actionVerbs(context.method),
    entityType: entities(context.path),
    entityName: entityDescription,
    user: simpleUser(context),
    boardId: boardId
  });

  return context;
}

async function postBoardActivity(context) {
  return await postActivity(context, context.result._id, context.result.name);
}

async function postListActivity(context) {
  return await postActivity(context, context.result.boardId, context.result.name);
}

module.exports = {
  postBoardActivity,
  postListActivity
};