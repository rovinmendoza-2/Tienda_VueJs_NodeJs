const express = require('express');
const app = express();

const port = process.env.port || 4200;

app.listen(port, () => {
    console.log("servidor corriendo en", port);
});


module.exports = app;