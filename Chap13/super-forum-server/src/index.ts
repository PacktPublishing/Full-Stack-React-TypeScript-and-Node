import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import { createConnection } from "typeorm";
import { register, login } from "./repo/UserRepo";
import bodyParser from "body-parser";
require("dotenv").config();

const main = async () => {
  const app = express();
  const router = express.Router();

  await createConnection();
  const redis = new Redis({
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  });
  const RedisStore = connectRedis(session);
  const redisStore = new RedisStore({
    client: redis,
  });

  app.use(bodyParser.json());
  app.use(
    session({
      store: redisStore,
      name: process.env.COOKIE_NAME,
      sameSite: "Strict",
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
      },
    } as any)
  );
  app.use(router);
  router.post("/register", async (req, res, next) => {
    try {
      console.log("params", req.body);
      const user = await register(
        req.body.email,
        req.body.userName,
        req.body.password
      );
      if (user) {
        res.send(`new user created, userid: ${user.id}`);
      } else {
        next();
      }
    } catch (ex) {
      res.send(ex.message);
    }
  });
  router.post("/login", async (req, res, next) => {
    try {
      console.log("params", req.body);
      const user = await login(req.body.userName, req.body.password);
      if (user) {
        req.session!.userid = user?.id;
        res.send(`user logged in, userid: ${req.session!.userid}`);
      } else {
        next();
      }
    } catch (ex) {
      res.send(ex.message);
    }
  });

  app.listen({ port: process.env.SERVER_PORT }, () => {
    console.log(`Server ready on port ${process.env.SERVER_PORT}`);
  });
};

main();
