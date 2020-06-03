import db from "services/dynamo";
import { v4 as uuidv4 } from "uuid";

const usersSessionTable = db("users");

const usersSession = {
  async create({ userId, sessionId }) {
    const userSession = {
      userId,
      sid: uuidv4(),
    };
    return await usersSessionTable.put(userSession);
  },
  async get(sid ) {
    const key = {
      sid,
    };
    return await usersSessionTable.get(key);
  },
};

export default usersSession;
