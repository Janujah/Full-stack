const Mongoose =require("mongoose");
const schema = new Mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  title: {
    type: String
  },
  created_by: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created_on: {
    type: Date
  },
  contant: {
    type: String
  },
  dead_line: {
    type: Date
  },
  status: {
    type: String
  }
});
const Model = Mongoose.model('To-Do List', schema);
module.exports = Model;

