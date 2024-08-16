
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/categories', (req, res) => {
    res.json([
        {id: 1, name: "hello"}, 
        {id: 2, name: "world"}, 
    ]);
  }) ;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});