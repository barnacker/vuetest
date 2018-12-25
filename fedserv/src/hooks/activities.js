const mongoose = require('mongoose');

async function postBoardActivity(context) {

  const actionVerb = new Map();
  actionVerb.set('create', 'created');
  actionVerb.set('remove', 'removed');
  actionVerb.set('patch', 'modified');
  actionVerb.set('update', 'modified');

  const entity = new Map();
  entity.set('boards', 'board');
  entity.set('lists', 'list');
  entity.set('cards', 'card');

  const user = (({ _id, username, displayname, email }) => ({ _id, username, displayname, email }))(context.params.user);

  const activities = mongoose.model('activities');
  await activities.create({
    text: actionVerb.get(context.method) + ' ' + entity.get(context.path) + ' ' + context.result.name,
    user: user,
    boardId: context.result._id
  });

  return context;
}

module.exports = {
  postBoardActivity,
};