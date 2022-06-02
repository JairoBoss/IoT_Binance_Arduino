module.exports = (app) => {
  const router = require("express").Router();
  const MovimientoController = require("../controller/movimiento.controller.js");

  router.post("/", MovimientoController.create);

  router.get("/", MovimientoController.findAll);

  router.get("/:id", MovimientoController.findOne);

  router.put("/:id", MovimientoController.update);

  router.delete("/:id", MovimientoController.delete);

  app.use("/api/movimiento", router);
};
