const axios = require("axios");

exports.isAdmin = async (req, res, next) => {
  try {
    let config = {
      method: "get",
      url: `${process.env.API_GATEWAY_URL}/auth/isAdmin`,
      headers: {
        Authorization: req.headers.authorization || "",
      },
    };

    const response = await axios(config);
    req.user = { id: response.data.id };

    next();
  } catch (error) {
    return next(error);
  }
};

exports.isUser = async (req, res, next) => {
  try {
    let config = {
      method: "get",
      url: `${process.env.API_GATEWAY_URL}/auth/isUser`,
      headers: {
        Authorization: req.headers.authorization || "",
      },
    };

    const response = await axios(config);
    req.user = { id: response.data.id };

    next();
  } catch (error) {
    return next(error);
  }
};

exports.isAdminOrUser = async (req, res, next) => {
  try {
    let config = {
      method: "get",
      url: `${process.env.API_GATEWAY_URL}/auth/isAdminOrUser`,
      headers: {
        Authorization: req.headers.authorization || "",
      },
    };

    const response = await axios(config);
    req.user = { id: response.data.id };

    next();
  } catch (error) {
    return next(error);
  }
};
