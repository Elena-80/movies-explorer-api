const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { PORT, DB_URL } = require('./config');
const router = require('./routes');
const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./utils/rateLimiter');

const app = express();

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  // useUnifiedTopology: true,
});

app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);

app.use(requestLogger);

// app.use(cookieParser());
app.use(helmet());
app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
