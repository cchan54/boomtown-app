import express from "express";
import bodyParser from "body-parser";
import schema from "./schema";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";

const PORT = 3333;
const app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

app.listen(PORT, err => {
  if (err) {
    console.log("Error starting Express...", err);
  } else {
    console.log(
      `Express GraphQL Server running. Access GraphiQL on http://localhost:${PORT}/graphiql`
    );
  }
});
