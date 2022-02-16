import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";
import { v4 as uuid } from "uuid";

export const handler: APIGatewayProxyHandler = async (event) => {
  const { id: user_id } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body);

  const id = uuid();

  await document
    .put({
      TableName: "users_todo",
      Item: {
        id,
        user_id,
        title,
        deadline: new Date(deadline).getTime(),
        done: false,
      },
    })
    .promise();

  const result = await document
    .query({
      TableName: "users_todo",
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": id,
      },
    })
    .promise();

  const response = result.Items[0];

  return {
    statusCode: 201,
    body: JSON.stringify(response),
  };
};
