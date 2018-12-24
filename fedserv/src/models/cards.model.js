// boards-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const cards = new Schema({
    content: { type: String, required: true },
    order: { type: Number, required: true, default: 0 },
    listId: { type: Schema.Types.ObjectId, ref: 'lists' },
    done: { type: Boolean, default: false },
  }, {
    timestamps: true
  });

  return mongooseClient.model('cards', cards);
};
