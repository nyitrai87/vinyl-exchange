const express = require('express');

const mongoDbClient = require('./data/mongodb-client');

const createUser = require('./auth/auth.api');
const listVinylsHandler = require('./api/vinyls/list-all-handler');
const getVinylById = require('./api/vinyls/get-vinyl-handler');
const createNewVinyl = require('./api/vinyls/create-vinyl-handler');
const deleteVinylById = require('./api/vinyls/delete-vinyl-handler');
const modifyVinylById = require('./api/vinyls/modify-vinyl-handler');

const port = 3000;
const app = express();

mongoDbClient.onConnectionError(error => {
    console.error(`Failed to connect to MongoDB! ${error}`);
    process.exit(1);
});

mongoDbClient.onSuccessfulConnect(() => {
    console.info('Connected to MongoDB.');
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});

mongoDbClient.connect('mongodb://localhost:27017/vinyl-exchange');

app.use(express.json());

app.get('/', (req, res) => {
    res.type('text/plain').send('Hello World!');
});

app.get('/vinyls', listVinylsHandler);
app.get('/vinyls/:id', getVinylById);
app.post('/vinyls', createNewVinyl);
app.delete('/vinyls/:id', deleteVinylById);
app.put('/vinyls/:id', modifyVinylById);

app.post('/users', createUser);
