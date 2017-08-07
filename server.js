const
  config = require('./config'),
  path = require('path'),
  express = require('express'),
  morgan = require('morgan');

const
  app = express();

app.use(morgan('dev')); // log every request to the console
app.use(express.static(path.resolve(__dirname, '/app')));


app.get('/', (req, res) => {
  res.sendFile('/app/index.html');
});


app.listen(config.port, () => {
  console.log(`Express started on port ${config.port} press ctrl-c to terminate`);
});
