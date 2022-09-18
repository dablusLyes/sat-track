const app = require('express')();
const path = require('path');

const bodyParser = require('body-parser');
const dataFetcher = require('./fetcher');

const PORT = '3001';

app.use('/',dataFetcher)

app.listen(PORT, () => {  
    console.log('listening on http://localhost:' + PORT);
})
