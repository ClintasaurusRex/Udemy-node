const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`tour id is: ${val}`);
  next();
});

// Define routes
// prettier-ignore
router
.route('/')
.get(tourController.getAllTours)
.post(tourController.createTour);

// prettier-ignore
router
.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = router;
