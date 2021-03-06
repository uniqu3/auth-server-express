const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:auth/auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

const port = process.env.PORT || 3090;
const server = http.createServer(app);
router(app);

server.listen(port);
console.log(`Server listening on ${port}`);
