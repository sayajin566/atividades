import fastify from "fastify";
import shelfRoutes from "./routes/shelf.routes";
import bookRoutes from "./routes/book.routes";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors);

server.register(shelfRoutes, {
  prefix: "/shelf",
});

server.register(bookRoutes, {
  prefix: "/book",
});

server.listen(
  {
    port: 3333,
  },
  () => console.log("🚀 Server is running on port 3333")
);
