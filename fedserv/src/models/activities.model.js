// activities-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const activities = new Schema({
    text: { type: String, required: true },
    user: {
      type: Map,
      of: String
    },
    boardId: { type: Schema.Types.ObjectId, ref: 'boards' },
  }, {
    timestamps: true
  });

  return mongooseClient.model('activities', activities);
};
