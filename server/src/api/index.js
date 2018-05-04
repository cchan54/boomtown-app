import initPostgres from "./resources/postgresDB";
import initJson from "./resources/jsonserver";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import typeDefs from "./schema";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

import schema from "./schema";
import Loaders from "./loaders";
import createResolvers from "./resolvers";

export default function(app) {
  const jsonResources = initJson(app);

  const resolvers = createResolvers({
    jsonResources
  });

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  app.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress({
      schema,
      context: {
        loaders: Loaders({
          jsonResources
        })
      }
    })
  );

  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql"
    })
  );
}
