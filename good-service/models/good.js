"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class good extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  good.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      image: {
        type: DataTypes.STRING,
        //Set custom getter for book image using URL
        get() {
          const image = this.getDataValue("image");

          if (!image) {
            return image;
          }

          return process.env.S3_URL + "/" + image;
        },
      },
    },
    {
      sequelize,
      paranoid: true, // Activate soft delete
      timestamps: true, // timestamps
      modelName: "good",
    }
  );
  return good;
};
