import db from "services/dynamo";
import { ROLES } from "utils/constants";

const userTable = db("users");

const users = {
  async create({ userId, firstName, lastName }) {
    const user = {
      id: userId,
      firstName,
      lastName,
      role: ROLES.MEMBER,
      hsTemplatePermissions: [],
    };
    return await userTable.put(user);
  },
  async getById(userId) {
    return await userTable.put({ id: userId });
  },
  async changeRole(role) {},
  async updateTemplatePermissions(hsTemplateId, action) {},
};

export default users;
