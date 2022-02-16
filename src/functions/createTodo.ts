import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";
import { v4 as uuid } from "uuid";

interface ITodo {
  id: string;
  user_id: string;
  title: string;
  deadline: string;
  done: boolean;
}

export const handler: APIGatewayProxyHandler = async (event) => {
  const { id: user_id } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body);

  const todo: ITodo = {
    id: uuid(),
    user_id,
    title,
    deadline: new Date(deadline).toISOString(),
    done: false,
  }

  await document
    .put({
      TableName: "users_todo",
      Item: todo,
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify(todo),
  };
};
