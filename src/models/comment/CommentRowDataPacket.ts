import Comment from "./Comment";
import { RowDataPacket } from "mysql2";

type CommentRowDataPacket = Comment & RowDataPacket;

export default CommentRowDataPacket;
