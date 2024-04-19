import { FastifyInstance } from "fastify";
import { libraryController } from "../controllers";

export default async function libraryRoutes(fastify: FastifyInstance) {
  fastify.post("/", libraryController.handleCreateLibrary);
  fastify.get("/", libraryController.handleListAllLibrary);
  fastify.get("/:id", libraryController.handleListByIdLibrary);
  fastify.put("/:id", libraryController.handleUpdateLibrary);
  fastify.delete("/:id", libraryController.handleDeleteLibrary);
}