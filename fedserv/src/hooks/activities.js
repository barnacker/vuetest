const mongoose = require('mongoose');

async function postBoardActivity(context) {
  const { displayname } = context.params.user;
  console.log(displayname, context.method, context.path, context.result.name);

  const activities = mongoose.model('activities');
  await activities.create({
    text: displayname + ' ' + context.method + ' ' + context.path + ' ' + context.result.name,
    boardId: context.result._id
  });

  return context;
}

module.exports = {
  postBoardActivity,
};