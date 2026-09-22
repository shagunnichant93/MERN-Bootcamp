const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Person = require("./models/Person");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/peopleDB")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed");
        console.log(error);
    });

app.get("/", (req, res) => {
    res.send("People API is running");
});
app.post("/api/people", async (req, res) => {
    try {
        const person = await Person.create(req.body);

        res.status(201).json(person);
    } catch (error) {
        res.status(500).json({
            message: "Failed to save person",
            error: error.message
        });
    }
});
app.get("/test-save", async (req, res) => {
    try {
        const person = await Person.create({
            name: "Shagun",
            age: 30,
            city: "Delhi",
            email: "shagun@example.com",
            address: "Delhi"
        });

        res.json(person);
    } catch (error) {
        res.status(500).json({
            message: "Failed to save person",
            error: error.message
        });
    }
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});