import User from "./User";
import { RowDataPacket } from "mysql2";

type UserRowDataPacket = User & RowDataPacket;

export default UserRowDataPacket;
