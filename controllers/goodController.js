const axios = require("axios");
const FormData = require("form-data");

class GoodController {
  async good(req, res, next) {
    try {
      if (
        req.url === "/" ||
        req.url.length === 37 ||
        req.url.includes("/search")
      ) {
        let config = {
          method: req.method,
          url: `${process.env.GOOD_SERVICE_URL}${req.originalUrl}`,
        };

        if (req.headers.authorization) {
          config.headers = { Authorization: req.headers.authorization };
        }

        if (req.headers["content-type"]?.includes("multipart/form-data")) {
          let data = new FormData();
          data.append("name", req.body.name);
          data.append("price", req.body.price);
          data.append("description", req.body.description);
          if (req.files) {
            data.append("image", Buffer.from(req.files.image.data), {
              filename: req.files.image.name,
            });
          }

          config.data = data;
          config.headers = {
            ...config.headers,
            ...data.getHeaders(),
          };
        } else if (req.body) {
          config.data = JSON.stringify(req.body);
          config.headers = {
            ...config.headers,
            "Content-Type": "application/json",
          };
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

module.exports = new GoodController();
