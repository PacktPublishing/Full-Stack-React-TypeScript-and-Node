import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
import faker from "faker";
import { testGraphQLQuery } from "./testGraphQLQuery";
import { addMockFunctionsToSchema } from "apollo-server-express";

describe("Testing getting a user", () => {
  const GetUser = `
        query GetUser($id: ID!) {
            getUser(id: $id) {
                id
                username
                email
            }
        }
    `;

  it("gets the desired user", async () => {
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const userId = faker.random.alphaNumeric(20);
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const mocks = {
      User: () => ({
        id: userId,
        username,
        email,
      }),
    };
    console.log("id", userId);
    console.log("username", username);
    console.log("email", email);

    addMockFunctionsToSchema({ schema, mocks });

    const queryResponse = await testGraphQLQuery({
      schema,
      source: GetUser,
      variableValues: { id: faker.random.alphaNumeric(20) },
    });
    const result = queryResponse.data ? queryResponse.data.getUser : null;
    console.log("result", result);
    expect(result).toEqual({
      id: userId,
      username,
      email,
    });
  });
});
