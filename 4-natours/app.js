const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) Middlewares
app.use(morgan('dev'));
app.use(express.json()); // Middleware

// Creating our own MIDDLEWARE: This applies to every single route

app.use((req, res, next) => {
  console.log('Hello from the middleware!!!!!!!!!!!!!!');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}.......`);
});
// 127.0.0.1:3000
