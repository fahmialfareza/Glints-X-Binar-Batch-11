const axios = require("axios");

class AuthController {
  async auth(req, res, next) {
    try {
      if (
        req.url === "/signin" ||
        "/signup" ||
        "/isAdmin" ||
        "/isUser" ||
        "/isAdminOrUser"
      ) {
        let config = {
          method: req.method,
          url: `${process.env.AUTH_SERVICE_URL}${req.originalUrl}`,
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

module.exports = new AuthController();
