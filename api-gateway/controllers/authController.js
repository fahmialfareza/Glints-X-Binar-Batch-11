const axios = require("axios");

class AuthController {
  async auth(req, res, next) {
    try {
      if (
        req.url === "/signin" ||
        req.url === "/signup" ||
        req.url === "/isAdmin" ||
        req.url === "/isUser" ||
        req.url === "/isAdminOrUser" ||
        req.url === "/me" ||
        req.url.length === 45
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
