```js
const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();

// 1) Middlewares
app.use(morgan("dev"));
app.use(express.json()); // Middleware

// Creating our own MIDDLEWARE: This applies to every single route

app.use((req, res, next) => {
  console.log("Hello from the middleware!!!!!!!!!!!!!!");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to the endpoint...');
// });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// 2) ROUTE HANDLERS

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  // Add the success response
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  });

  // res.send('Done');
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: { tour: "<Updated tour here...>" },
  });
};

const deleteTour = (req, res) => {
  const paramId = req.params.id;
  if (paramId * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  // 204 means no content
  res.status(204).json({
    status: "success",
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

// 3) ROUTES

// app.get('/api/v1/tours', getAllTours); // This is the same as the app.route below
// app.post('/api/v1/tours', createTour);

// app.get('/api/v1/tours/:id/', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use("/api/v1/tours", tourRouter);
const tourRouter = express.Router();

tourRouter.route("/api/v1/tours").get(getAllTours).post(createTour); // before tourRouter middleware

tourRouter.route("/api/v1/tours/:id/").get(getTour).patch(updateTour).delete(deleteTour);

app.route("/api/v1/users").get(getAllUsers).post(createUser);

app.route("/api/v1/users/:id").get(getUser).patch(updateUser).delete(deleteUser);

// 4) SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}.......`);
});
// 127.0.0.1:3000

//----------------------------------------------------------------------------------------------------

const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();

// 1) Middlewares
app.use(morgan("dev"));
app.use(express.json()); // Middleware

// Creating our own MIDDLEWARE: This applies to every single route

app.use((req, res, next) => {
  console.log("Hello from the middleware!!!!!!!!!!!!!!");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to the endpoint...');
// });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// 2) ROUTE HANDLERS

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  // Add the success response
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  });

  // res.send('Done');
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: { tour: "<Updated tour here...>" },
  });
};

const deleteTour = (req, res) => {
  const paramId = req.params.id;
  if (paramId * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  // 204 means no content
  res.status(204).json({
    status: "success",
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

// 3) ROUTES

// app.get('/api/v1/tours', getAllTours); // This is the same as the app.route below
// app.post('/api/v1/tours', createTour);

// app.get('/api/v1/tours/:id/', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

const tourRouter = express.Router();
const userRouter = express.Router();

// tourRouter.route('/api/v1/tours').get(getAllTours).post(createTour); // before tourRouter middleware\

// prettier-ignore
tourRouter
.route('/')
.get(getAllTours)
.post(createTour); // After middleware

// prettier-ignore
tourRouter
.route('/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour);

// app.route('/api/v1/users').get(getAllUsers).post(createUser); Before middleware
// after see line 171

// prettier-ignore
userRouter
.route('/')
.get(getAllUsers)
.post(createUser)

// prettier-ignore
userRouter
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
// 4) SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}.......`);
});
// 127.0.0.1:3000
```
