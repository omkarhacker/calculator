const express = require("express");
const cors = require("cors"); // Import CORS middleware

const app = express();

// Enable CORS for all routes
app.use(cors());

// Example: Handle GET request to /sum
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;

    // Respond with JSON object
    res.json({ ans: sum });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
