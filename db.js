//-----------------------------
//#region Database Connection
//-----------------------------
const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "foo.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});

//#endregion Database Connection

//-----------------------------
//#region Routes
//-----------------------------
/**
 * Gets a single user by id
 */
const getUserById = (request, response) => {
  // Parse the id to generate a SQLite query
  const id = parseInt(request.params.id);
  const query = `SELECT * FROM user WHERE id = ?`;

  // db.get will replace all ? in query sequentially with
  // items from the array passed as the second parameter
  // and then run the callback function passed as the third param
  // What does the callback function do?
  db.get(query, [id], (error, result) => {
    if (error) {
      console.error(error.message);
      response.status(400).json({ error: error.message });
      return;
    }
    // If nothing is returned, then result will be undefined
    if (result) {
      response.json(result);
    } else {
      response.sendStatus(404);
    }
  });
};

const getAllUsers = (request, response) => {
  // Parse the id to generate a SQLite query
  const query = 'SELECT * FROM user';

  // db.get will replace all ? in query sequentially with
  // items from the array passed as the second parameter
  // and then run the callback function passed as the third param
  // What does the callback function do?
  db.all(query, (error, result) => {
    if (error) {
      console.error(error.message);
      response.status(400).json({ error: error.message });
      return;
    }
    // If nothing is returned, then result will be undefined
    if (result) {
      console.log(result);
      response.json(result);
    } else {
      response.sendStatus(404);
    }
  });
};

const newUser = (request, response) => {
  // Parse the id to generate a SQLite query
  const name = request.body.name
  const query = 'INSERT INTO user(name) VALUES (?)';

  // db.get will replace all ? in query sequentially with
  // items from the array passed as the second parameter
  // and then run the callback function passed as the third param
  // What does the callback function do?
  db.all(query, [name], (error, result) => {
    if (error) {
      console.error(error.message);
      response.status(400).json({ error: error.message });
      return;
    }
    // If nothing is returned, then result will be undefined
    if (result) {
      response.json(result);
    } else {
      response.sendStatus(404);
    }
  });
};

const updateNameFromID = (request, response) => {
  // Parse the id to generate a SQLite query
  const id = parseInt(request.params.id);
  const query = 'UPDATE user SET name = ? WHERE id = ?';

  // db.get will replace all ? in query sequentially with
  // items from the array passed as the second parameter
  // and then run the callback function passed as the third param
  // What does the callback function do?
  db.all(query, [request.body.name, id], (error, result) => {
    if (error) {
      console.error(error.message);
      response.status(400).json({ error: error.message });
      return;
    }
    // If nothing is returned, then result will be undefined
    if (result) {
      response.json(result);
    } else {
      response.sendStatus(404);
    }
  });
};

const deleteUserByID = (request, response) => {
  // Parse the id to generate a SQLite query
  const id = parseInt(request.params.id);
  const query = 'DELETE FROM user WHERE id = ?';

  //DELETE FROM user WHERE id = ?
  // db.get will replace all ? in query sequentially with
  // items from the array passed as the second parameter
  // and then run the callback function passed as the third param
  // What does the callback function do?
  db.all(query, [request.body.name, id], (error, result) => {
    if (error) {
      console.error(error.message);
      response.status(400).json({ error: error.message });
      return;
    }
    // If nothing is returned, then result will be undefined
    if (result) {
      response.json(result);
    } else {
      response.sendStatus(404);
    }
  });
};

// ----- FILL IN BELOW -----
// Write and export the rest of the functions needed by index.js!

//#endregion Routes

// This allows `index.js` to use functions defined in this file.
module.exports = {
  getUserById,
<<<<<<< HEAD
=======
  getAllUsers,
  newUser,
  updateNameFromID,
  deleteUserByID,
>>>>>>> c3dc1a1 (work)
};
