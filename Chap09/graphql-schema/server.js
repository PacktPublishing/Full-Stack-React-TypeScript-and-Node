"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs_1 = __importDefault(require("./typeDefs"));
var resolvers_1 = __importDefault(require("./resolvers"));
var app = express_1.default();
var pubsub = new apollo_server_express_1.PubSub();
var schema = apollo_server_express_1.makeExecutableSchema({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
var apolloServer = new apollo_server_express_1.ApolloServer({
    schema: schema,
    context: function (_a) {
        var req = _a.req, res = _a.res;
        return ({ req: req, res: res, pubsub: pubsub });
    },
});
apolloServer.applyMiddleware({ app: app, cors: false });
var httpServer = http_1.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);
httpServer.listen({ port: 8000 }, function () {
    console.log("GraphQL server ready." + apolloServer.graphqlPath);
    console.log("GraphQL subs server ready." + apolloServer.subscriptionsPath);
});
