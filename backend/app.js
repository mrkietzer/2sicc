const express = require('express');
const app = express();
require('dotenv').config();

// * CONFIG
const PORT = 5216;
const SERVER_URL = `http://localhost:${PORT}`;

// * MIDDLEWARE


// * ROUTES
app.use(express.json());
app.use("/api/v1/tasks", require("./routes/tasks.router"))
app.use("/api/v1/missions", require("./routes/missions.router"))
// TEMP
app.get('/', (req, res) => {
    res.send('lets git 2SICC 2QUIT!');
});

// * LISTEN
app.listen(PORT, () => {
    console.log(`Server serving at: ${SERVER_URL}`);
});


const start = async () => {
    try {

    }

    catch (err) {
        console.log(err);
    }
};

start();
