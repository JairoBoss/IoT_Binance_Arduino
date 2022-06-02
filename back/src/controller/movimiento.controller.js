const Movimiento = require("../model/movimiento.model");

exports.create = async (req, res) => {
  if (!req.body.Moneda) {
    return res
      .status(400)
      .send({ error: "El movimiento debe de contener una moneda" });
  }

  const movimientoNuevo = new Movimiento({
    usuario: req.body.usuario,
    moneda: req.body.moneda,
    tipo: req.body.tipo,
    cantidad: req.body.cantidad,
  });

  movimientoNuevo.save((err, movimientoNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el movimiento de ${req.body.usuario}`,
      });
    } else {
      res.status(200).send(movimientoNuevo);
    }
  });
};

exports.findAll = (req, res) => {
  Movimiento.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuperar todos los Movimiento.",
      });
    });
};

exports.findOne = (req, res) => {
  Movimiento.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Movimiento con id: ${req.params.id} no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Movimiento con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del Movimiento con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Movimiento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el movimiento con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Movimiento.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Movimiento eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar al Movimiento con id: ${req.params.id}.`,
      });
    });
};
