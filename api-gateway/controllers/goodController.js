const axios = require("axios");

class GoodController {
  async good(req, res, next) {
    try {
      if (req.url === "/") {
        let config = {
          method: req.method,
          url: `${process.env.GOOD_SERVICE_URL}${req.originalUrl}`,
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
      return next({
        message: e.response.data.message,
        statusCode: e.response.status,
      });
    }
  }
}

module.exports = new GoodController();
