const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
})




// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Set app to listen to port 3000
app.listen(3000, () => {
  console.log('Listening on PORT 3000...');
});