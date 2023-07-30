const express = require('express');
const router = express.Router();
const {
  getFootballers,
  getFootballer,
  createFootballer,
  updateFootballer,
  deleteFootballer,
} = require('../controllers/footballerController');

router.route('/').get(getFootballers).post(createFootballer);
router
  .route('/:id')
  .get(getFootballer)
  .put(updateFootballer)
  .delete(deleteFootballer);

module.exports = router;
