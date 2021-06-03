const jwt = require("jsonwebtoken"); // import jsonwebtoken
const { user } = require("../models");

class AuthController {
  async getToken(req, res, next) {
    try {
      // Get the req.user that has been created in the authRoutes
      // And create body variable
      const body = {
        user: {
          id: req.user.dataValues.id,
        },
      };

      // Create jwt token with { user: { id: req.user._id } } value
      // And the key is process.env.JWT_SECRET
      const token = jwt.sign(body, process.env.JWT_SECRET, {
        expiresIn: "60d",
      });

      if (req.user.method === "oauth") {
        return res.redirect(
          process.env.OAUTH_CALLBACK_FRONTEND + "/signin?token=" + token
        );
      }

      // If success
      return res.status(200).json({ token });
    } catch (e) {
      return next(e);
    }
  }

  async getIdUser(req, res, next) {
    try {
      return res.status(200).json({
        id: req.user.id,
        role: req.user.role,
      });
    } catch (error) {
      return next(error);
    }
  }

  async getUserProfile(req, res, next) {
    try {
      const data = await user.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["password", "role"] },
      });

      return res.status(200).json({ data });
    } catch (error) {
      return next(error);
    }
  }

  async getMyProfile(req, res, next) {
    try {
      const data = await user.findOne({
        where: { id: req.user.id },
        attributes: { exclude: ["password"] },
      });

      return res.status(200).json({ data });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new AuthController();
