import express from "express";
import bodyParser from "body-parser";
import schema from "./api/schema";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import cors from "cors";
import { Pool } from "pg";
import Loaders from "./api/loaders";
import initConfigs from "./configs";
import initApi from "./configs";

const PORT = 3333;
const app = express();

initConfigs(app);

const pool = new Pool({
  user: app.get("PGUSER"),
  host: app.get("PGHOST"),
  database: app.get("PGDATABASE"),
  password: app.get("PGPASSWORD")
});

pool.query("SELECT * FROM items", (err, res) => {
  if (err) {
    throw err;
  }

  console.log("user:", res.rows[0]);
});

app.use("*", cors());

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      loaders: Loaders()
    }
  })
);

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
