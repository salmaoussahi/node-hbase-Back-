module.exports = app => {
    const user = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    router.get("/:name", user.findUserByName);
    router.put("/:name", user.updateUserByName);
    router.post("/", user.addUser);
    router.delete("/:name", user.deleteUser);
    

    app.use('/api/user', router);
  };
  