import express from "express";
let server = express();
import mongoose from "mongoose";
import "./controller.js";
import { create, read, readById, update, del } from "./controller.js";
import "dotenv/config";
let url = process.env.dataBaseUrlString;
mongoose
    .connect(url)
    .then(() => {
        console.log("DataBase connected...");
    })
    .catch(() => {
        console.log("DataBase is not connected...");
    });
server.use(express.json());
// CRUD operations and REST APIs
server.post("/users", (req, res) => create(req, res));
server.get("/users", (req, res) => read(req, res));
server.get("/users/:name", (req, res) => readById(req, res));
server.put("/users/:name", (req, res) => update(req, res));
server.delete("/users/:name", (req, res) => del(req, res));

server.listen(8080, () => {
    console.log("Server started...");
});
