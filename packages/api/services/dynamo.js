import AWS from "aws-sdk";

const db = new AWS.DynamoDB.DocumentClient();

const dynamo = (TableName) => ({
  async get(keys) {
    const params = {
      TableName,
      Key: keys,
    };
    const result = await db.get(params).promise();
    return result.Item;
  },

  async put(Item) {
    const params = {
      TableName,
      Item,
    };

    return db.put(params).promise();
  },

  async updateSet(keys, updateKey, updateValue) {
    const params = {
      TableName,
      Key: keys,
      UpdateExpression: `set ${updateKey} = :updateValue`,
      ExpressionAttributeValues: {
        ":updateValue": updateValue,
      },
    };

    return db.update(params).promise();
  },

  async update({ keys, UpdateExpression, ExpressionAttributeValues }) {
    const params = {
      TableName,
      Key: keys,
      UpdateExpression,
      ExpressionAttributeValues,
    };

    return db.update(params).promise();
  },
});

export default {
  db: dynamo,
};
