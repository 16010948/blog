import moment from "moment";
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  contents: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
