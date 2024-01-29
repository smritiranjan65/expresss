express = require("express");
app = express();
port = 3000;


app.listen(port, () => {console.log('server activity running on port $(port)')});