import CommentRowDataPacket from "../models/comment/CommentRowDataPacket";
import Comment from "../models/comment/Comment";

const mapToComment = (row: CommentRowDataPacket): Comment => ({
  id: row.id,
  body: row.body,
  article: row.article_id,
  author: row.author_id,
});

export default mapToComment;
