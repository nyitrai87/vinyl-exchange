const express = require('express');
const listVinylsHandler = require('./api/vinyls/list-all-handler');
const getVinylById = require('./api/vinyls/get-vinyl-handler');
const createNewVinyl = require('./api/vinyls/create-vinyl-handler');
const deleteVinylById = require('./api/vinyls/delete-vinyl-handler');
const modifyVinylById = require('./api/vinyls/modify-vinyl-handler');

const port = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.type('text/plain').send('Hello World!');
});

app.get('/vinyls', listVinylsHandler);
app.get('/vinyls/:id', getVinylById);
app.post('/vinyls', createNewVinyl);
app.delete('/vinyls/:id', deleteVinylById);
app.put('/vinyls/:id', modifyVinylById);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
