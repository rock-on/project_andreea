const express = require('express');
const router = express.Router();

const controller = require('../../controllers/user.controller');

router.get('/', controller.details_all);
router.post('/', controller.create);
router.get('/:id', controller.details);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;