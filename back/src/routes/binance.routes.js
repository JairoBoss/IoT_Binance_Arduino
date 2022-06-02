module.exports = (app) => {
  const router = require("express").Router();
  const binance = require("../config/binance.config");

  router.get("/btc-usdt", (req, res) => {
    binance.bookTickers("BTCUSDT", (error, ticker) => {
      console.info("bookTickers", ticker);
      res.json({ "Precio BTCUSDT": `${ticker.bidPrice}` });
    });
  });

  router.get("/eth-usdt", (req, res) => {
    binance.bookTickers("ETHUSDT", (error, ticker) => {
      console.info("bookTickers", ticker);
      res.json({ "Precio ETHUSDT": `${ticker.bidPrice}` });
    });
  });

  app.use("/api/binance", router);
};
