const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send("Hello from Docker!");
});


// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Server is running",
        container: "Docker"
    });
});


// Get users
app.get("/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Amruth"
        },
        {
            id: 2,
            name: "Rahul"
        }
    ]);
});


// Get user by ID
app.get("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    res.json({
        message: "User requested",
        userId: id
    });

});


// POST user
app.post("/users", (req, res) => {

    const name = req.body.name;

    res.status(201).json({
        message: "User created",
        name: name
    });

});


// 404 route
app.use((req, res) => {

    res.status(404).json({
        message: "Route not found"
    });

});


// Start server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});