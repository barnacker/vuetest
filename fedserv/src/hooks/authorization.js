const mongoose = require('mongoose');

async function isBoardOwner(context) {
  const { boardId } = context.params.query;
  const { _id } = context.params.user._id;
  const boards = mongoose.model('boards');
  const board = await boards.findById(boardId);

  if (!board) { throw new Error('Invalid boardID'); }
  if (board.ownerId.toString() !== _id.toString()) { throw new Error('Tayol Non'); }

  return context;
}

module.exports = {
  isBoardOwner,
};