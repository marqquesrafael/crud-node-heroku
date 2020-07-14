const router = require("express").Router();
const TesteMiddleware = require("./Middleware/TesteMiddleware");
const UserController = require("./controller/UserController");

router.get("/usuario", TesteMiddleware.testemiddle, UserController.index);
router.get("/usuario/:id", UserController.show);
router.post("/usuario", UserController.create);
router.put("/usuario/:id", UserController.update);
router.delete("/usuario/:id", UserController.delete);

module.exports = router;
