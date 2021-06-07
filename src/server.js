const express = require('express');
const app = express();
const port = 3000;

const vinyls = [
  {
    id: 0,
    title: 'Our Endless War',
    artist: 'Whitechapel',
  },
  {
    id: 1,
    title: 'Reverence',
    artist: 'Parkway Drive'
  },
  {
    id: 2,
    title: 'Shogun',
    artist: 'Trivium'
  }
];

let counter = vinyls.length;

app.use(express.json());

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello World!')
});

app.get('/vinyls', (req, res) => {
  res.json(vinyls)
});

app.get('/vinyls/:id', (req, res) => {
  const vinylID = +req.params.id;
  for(i=0; i < vinyls.length; i++) {
    if (vinylID === vinyls[i].id) {
      res.json(vinyls[i]);
      return;
    }
  }
  res.sendStatus(404);
});

app.post('/vinyls', (req, res) => {
  const vinyl = req.body;
  vinyl.id = counter++;
  vinyls.push(vinyl);
  res.json(vinyl);
})

app.delete('/vinyls/:id', (req, res) => {
  const vinylID = +req.params.id;
  let i = 0;
  for(i; i < vinyls.length; i++) {
    if(vinylID === vinyls[i].id) {
      break;
    }
  }
  vinyls.splice(i, 1);
  res.sendStatus(204);
});

app.put('/vinyls/:id', (req, res) => {
  const vinylID = +req.params.id;
  let i = 0;
  for(i; i < vinyls.length; i++) {
    if(vinylID === vinyls[i].id) {
      break;
    }
  }
  vinyls[i] = req.body;
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
