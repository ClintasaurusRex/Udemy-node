const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID);

// Create a checkBody middleware
// Check if body conatains the name and price property
// If not, send back a 400 bad request
// Add it to the post handler stack

// Define routes
// prettier-ignore
router
.route('/')
.get(tourController.getAllTours)
.post(tourController.checkBody, tourController.createTour);

// prettier-ignore
router
.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = router;
