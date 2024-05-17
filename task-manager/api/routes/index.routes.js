const router = require('./task.routes');
const AppRoutes = (app) => {
  app.use('/tasks', router);
};
module.exports = AppRoutes;
