import "reflect-metadata";
import { GraphQLSchema } from "graphql";
import {ApolloServer, makeExecutableSchema} from "apollo-server";
import { buildTypeDefsAndResolvers } from "type-graphql";
import UserResolver from "./resolvers/user/user.resolver";

const createSchema = async (): Promise<GraphQLSchema> => {
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
        resolvers: [
            UserResolver,
        ],
        validate: false,
        globalMiddlewares: []
    });

    return makeExecutableSchema({ typeDefs, resolvers });
}

const createServer = async (schema: GraphQLSchema): Promise<ApolloServer> => {
    return new ApolloServer({
        schema,
        cors: true,
        tracing: true,
        debug: process.env.GQL_ENV != "production",
        playground: process.env.GQL_ENV != "production",
        introspection: process.env.GQL_ENV != "production",
    });
};

const runServer = async (server: ApolloServer) => {
    const port = process.env.GQL_PORT || 6055;
    const serverInfo = await server.listen(port)
    console.log(`Your server already running at port ${serverInfo.port}`);
}

createSchema()
    .then(createServer)
    .then(runServer)
    .catch(console.error);