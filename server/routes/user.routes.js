module.exports = app => {
  const user = require("../controllers/user.controller.js");
  var router = require("express").Router();

  /**
   * @route POST api/user
   * @desc Creates a user
   * @access Public
   * @param {*} req 
   * @param {*} res 
   */
  router.post("/", user.create);

  // // Retrieve all Users
  // router.get("/", user.findAll);

  // // Retrieve a single User with id
  // router.get("/:id", user.findOne);

  // // Update a User with id
  // router.put("/:id", user.update);

  // // Delete a User with id
  // router.delete("/:id", user.delete);

  // // Delete all users
  // router.delete("/", user.deleteAll);



  app.use('/api/user', router);
};