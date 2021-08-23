const express = require('express');
const config = require('config');
const session = require('express-session');

const mongoDbClient = require('./data/mongodb-client');

const authAPI = require('./auth/auth.api');
const listVinylsHandler = require('./vinyls/api/list-all-handler');
const getVinylById = require('./vinyls/api/get-vinyl-handler');
const createNewVinyl = require('./vinyls/api/create-vinyl-handler');
const deleteVinylById = require('./vinyls/api/delete-vinyl-handler');
const modifyVinylById = require('./vinyls/api/modify-vinyl-handler');

const DEFAULT_PORT = 3000;
const port = config.get('express.port') || DEFAULT_PORT;
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

const mongoHost = config.get('mongoDb.host');
const mongoPort = config.get('mongoDb.port');
const connectionString = `mongodb://${mongoHost}:${mongoPort}/vinyl-exchange`;

mongoDbClient.connect(connectionString);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 86400000 },
    name: 'sessionID'
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/registration.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/vinyls', listVinylsHandler);
app.get('/vinyls/:id', getVinylById);
app.post('/vinyls', createNewVinyl);
app.delete('/vinyls/:id', deleteVinylById);
app.put('/vinyls/:id', modifyVinylById);

app.post('/users', authAPI.createUser);
app.post('/login', authAPI.login);
