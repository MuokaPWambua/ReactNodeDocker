const express = require('express');
const cors = require('cors');
const Numbers = require('./utils');

// Initialize App
const app = express();
app.use(cors())
app.use(express.json());

app.post('/save', async ( req, res ) => {
  const data = req.body;
  await Numbers.add(data)
  res.send({message: `numbers add ${JSON.stringify(data)}`})

});

app.get('/numbers', async ( req, res ) => {
  const data = await Numbers.get()
  const list = []
  data.forEach((doc) => {
    list.push(doc.data());
  });
  res.send(list)
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
