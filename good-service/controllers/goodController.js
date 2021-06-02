const axios = require("axios");
const { good } = require("../models"); // Import all models
const { deleteImage } = require("../helpers/s3");
const { Op } = require("sequelize");

class GoodController {
  // Get all
  async getAll(req, res, next) {
    try {
      let response;

      // If axios get 200/201/etc
      let data = await good.findAll({
        attributes: [
          "id",
          ["id_user", "user"],
          "name",
          "description",
          "price",
          "image",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      });

      // Get user
      for (let index = 0; index < data.length; index++) {
        response = await axios.get(
          `${process.env.API_GATEWAY_URL}/auth/profile/${data[index].dataValues.user}`
        );
        data[index].dataValues.user = response.data.data;
      }

      return res.status(200).json({ data });
    } catch (e) {
      return next(e);
    }
  }

  // Search good
  async search(req, res, next) {
    try {
      let response;

      // If axios get 200/201/etc
      let data = await good.findAll({
        where: {
          [Op.or]: [
            {
              name: { [Op.iLike]: `%${req.query.search}%` },
            },
            {
              description: { [Op.iLike]: `%${req.query.search}%` },
            },
          ],
        },
        attributes: [
          "id",
          ["id_user", "user"],
          "name",
          "description",
          "price",
          "image",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      });

      // Get user
      for (let index = 0; index < data.length; index++) {
        response = await axios.get(
          `${process.env.API_GATEWAY_URL}/auth/profile/${data[index].dataValues.user}`
        );
        data[index].dataValues.user = response.data.data;
      }

      return res.status(200).json({ data });
    } catch (error) {
      return next(error);
    }
  }

  // Get one
  async getOne(req, res, next) {
    try {
      // If axios get 200/201/etc
      let data = await good.findOne({
        where: {
          id: req.params.id,
        },
        attributes: [
          "id",
          ["id_user", "user"],
          "name",
          "description",
          "price",
          "image",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      });

      // Get user
      let response = await axios.get(
        `${process.env.API_GATEWAY_URL}/auth/profile/${data.dataValues.user}`
      );
      data.dataValues.user = response.data.data;

      return res.status(200).json({ data });
    } catch (e) {
      return next(e);
    }
  }

  // Create good
  async create(req, res, next) {
    try {
      let createdData = await good.create(req.body);

      let data = await good.findOne({
        where: {
          id: createdData.id,
        },
        attributes: [
          "id",
          ["id_user", "user"],
          "name",
          "description",
          "price",
          "image",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      });

      let response = await axios.get(
        `${process.env.API_GATEWAY_URL}/auth/profile/${data.dataValues.user}`
      );
      data.dataValues.user = response.data.data;

      return res.status(201).json({ data });
    } catch (e) {
      return next(e);
    }
  }

  // Update good
  async update(req, res, next) {
    try {
      let prevData;
      if (req.body.image) {
        prevData = await good.findOne({
          where: {
            id: req.params.id,
          },
          attributes: [
            "id",
            ["id_user", "user"],
            "name",
            "description",
            "price",
            "image",
            "createdAt",
            "updatedAt",
            "deletedAt",
          ],
        });
      }

      let updatedData = await good.update(req.body, {
        where: { id: req.params.id },
      });

      if (req.body.image) {
        // Delete image in s3
        await deleteImage(prevData.image.replace(process.env.S3_URL + "/", ""));
      }

      let data = await good.findOne({
        where: {
          id: req.params.id,
        },
        attributes: [
          "id",
          ["id_user", "user"],
          "name",
          "description",
          "price",
          "image",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      });

      let response = await axios.get(
        `${process.env.API_GATEWAY_URL}/auth/profile/${data.dataValues.user}`
      );
      data.dataValues.user = response.data.data;

      return res.status(201).json({ data });
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      // Delete data
      let data = await good.destroy({ where: { id: req.params.id } });

      // If data deleted is null
      if (!data) {
        return next({ message: "Good not found", statusCode: 404 });
      }

      // If success
      return res.status(200).json({
        message: "Success delete good",
      });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new GoodController();
