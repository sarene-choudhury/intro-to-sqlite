//-----------------------------
// #region Setup
//-----------------------------
const express = require("express");
const app = express();
const db = require("./db");
const PORT = 4000;
//#endregion Setup

//-----------------------------
//#region App Config
//-----------------------------
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
// Middleware that parses POST / PUT requests from a client
app.use(express.json());

// Handle CORS w/ client
// For more information about CORS (Cross-Origin Resource Sharing):
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
  // Allow access from multiple origins
  const allowedOrigins = [
    "http://localhost:8080",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  // Allow specific requests
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Pass to next layer of middleware
  next();
});
//#endregion App Config

//-----------------------------
//#region Database Routes
//-----------------------------
app.get("/", (req, res) => {
  res.json({ info: "Demo app for sqlite3" });
});

// This endpoint allows a client to get a single user by id
app.get("/user/:id", db.getUserById);

// ------ FILL IN BELOW -------
// Write endpoints that allow a client to:

// Get all users
app.get("/getAllUsers", db.getAllUsers);

// Create a new user
app.get("/newUser/", db.newUser);

// Update a user's name, given an id
app.get("/updateNameFromID/:id", db.updateNameFromID);

// Delete a user by id
app.get("/deleteUserByID/:id", db.deleteUserByID);

//#endregion Database Routes

//-----------------------------
//#region Server
//-----------------------------
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
//#endregion Server
