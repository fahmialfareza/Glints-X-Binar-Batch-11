const axios = require("axios");

class AuthController {
  async signup(req, res, next) {
    try {
      const data = JSON.stringify(req.body);

      const config = {
        method: "post",
        url: `${process.env.AUTH_SERVICE_URL}/signup`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios(config);

      return res.status(response.status).json(response.data);
    } catch (e) {
      return next({
        message: e.response.data.message,
        statusCode: e.response.status,
      });
    }
  }
}

module.exports = new AuthController();
