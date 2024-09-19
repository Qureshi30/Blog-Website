import express from "express";
import {
    PostController
} from './controllers/index.js';

const router = express.Router();

/*
 - Routes For Posts
*/
router.get("/", (req, res) => res.send("echo"));
router.post("/posts/create", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getById);
router.put("/posts/edit/:id", PostController.edit);
router.delete("/posts/delete/:id", PostController.delete);

export default router;