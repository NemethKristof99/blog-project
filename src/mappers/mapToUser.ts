import UserRowDataPacket from "../models/user/UserRowDataPacket";
import User from "../models/user/User";

const mapToUser = (row: UserRowDataPacket): User => ({
  id: row.id,
  email: row.email,
});

export default mapToUser;
