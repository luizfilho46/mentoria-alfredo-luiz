const taskControllers = require('../controllers/taskControllers');
const validaTask = require('../middleware/validaTasks');

const router = require('express').Router();
router.post('/', validaTask, taskControllers.create);
router.get('/', taskControllers.get);
router.delete('/:id', taskControllers.delete);
router.put('/:id', taskControllers.edit);
module.exports = router;
