const axios = require("axios");

class TransactionController {
  async transaction(req, res, next) {
    try {
      if ((req.url === "/", req.url.length === 25)) {
        let config = {
          method: req.method,
          url: `${process.env.TRANSACTION_SERVICE_URL}${req.originalUrl}`,
        };

        if (req.body) {
          config.data = JSON.stringify(req.body);
          config.headers = { "Content-Type": "application/json" };
        }

        if (req.headers.authorization) {
          config.headers.Authorization = req.headers.authorization;
        }

        const response = await axios(config);

        return res.status(response.status).json(response.data);
      }

      return next({
        message: `${req.originalUrl} is Not Found`,
        statusCode: 404,
      });
    } catch (e) {
      return next(e);
    }
  }
}

module.exports = new TransactionController();
