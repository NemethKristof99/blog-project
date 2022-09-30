import User from "../../models/user/User";
import { getDb } from "../../datasources/db";
import UserDao from "./UserDao";
import UserSpecificDao from "../../models/UserSpecificDao";
import Article from "../../models/article/Article";

const getUserDao = (): UserSpecificDao<number, User, Article> => {
  const db = getDb();

  return new UserDao(db);
};

export default getUserDao;
