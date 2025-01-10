var express = require('express');
var path = require('path');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8000, () => {
    console.log("Listening on 8000");
});
