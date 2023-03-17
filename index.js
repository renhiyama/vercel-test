import ReeServer from "@reejs/server";
import ReeFSR from "@reejs/server/fsr.js";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import render from "render";
const server = new ReeServer(Hono, {serve, render});
server.use(ReeFSR);
server.listen(3000, () => console.log('Server started on port 3000'));
