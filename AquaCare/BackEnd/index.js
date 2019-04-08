const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World for Fish');
});


//we cannot rely on 3000 to be available in PROD
//to set the port on local terminam "export PORT=5100"
//PORT
const port = process.env.PORT || 5100;
app.listen(port, () => console.log(`listening on port ${port}...`));

