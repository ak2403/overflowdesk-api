import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/http";

import { schema } from "./graphql/schema";

const app = express();

app.use(cors());

app.use("/graphql", createHandler({ schema }));

app.use("/ping", (req, res) => {
  res.status(200).send("pong...");
});

app.listen(8000, () => {
  console.log("server running...");
});
