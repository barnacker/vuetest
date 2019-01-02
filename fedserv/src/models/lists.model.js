// lists-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const lists = new Schema({
    name: { type: String, required: true },
    order: { type: Number, required: true, default: 0 },
    boardId: { type: Schema.Types.ObjectId, ref: 'boards' },
    archived: { type: Boolean, default: false },
    color: { type: String, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('lists', lists);
};
