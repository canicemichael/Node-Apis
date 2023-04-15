import express from "express";
import { AsyncLocalStorage } from "node:async_hooks";
import { uuid } from "uuidv4";

const asyncLocalStorage = new AsyncLocalStorage();

const requestIdMiddleware = (req, res, next) => {
  asyncLocalStorage.run(new Map(), () => {
    asyncLocalStorage.getStore().set("requestId", uuid());
    next();
  });
};

const app = express();

app.use(requestIdMiddleware);

app.get("/", (req, res) => {
  const id = asyncLocalStorage.getStore().get("requestId");
  console.log(`[${id}] request received`);
  res.send(`[${id}] request received  so it works`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));
