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

async function postActivity(context, action, boardId, entityDescription) {
  const activities = mongoose.model('activities');
  await activities.create({
    action: action,
    entityType: entities(context.path),
    entityName: entityDescription,
    user: simpleUser(context),
    boardId: boardId
  });

  return context;
}

async function postBoardActivity(context) {
  return await postActivity(context, actionVerbs(context.method), context.result._id, context.result.name);
}

async function postListActivity(context) {
  return await postActivity(context, actionVerbs(context.method), context.result.boardId, context.result.name);
}

async function postCardActivity(context) {
  let action;
  let boardId;
  if (context.method == 'remove') {
    const lists = mongoose.model('lists');
    const list = await lists.findById(context.result.listId).lean();
    if (!list) { return context; }
    action = actionVerbs(context.method);
    boardId = list.boardId;
  } else {
    action = context.data.move ? 'moved' : actionVerbs(context.method);
    boardId = context.data.boardId;
  }
  return await postActivity(context, action, boardId, context.result.content);
}

module.exports = {
  postBoardActivity,
  postListActivity,
  postCardActivity
};